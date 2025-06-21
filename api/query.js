const axios = require('axios');

module.exports = async (req, res) => {
    // 只允许POST请求
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { foodName, weight } = req.body;

    if (!foodName || !weight) {
        return res.status(400).json({ message: 'Missing foodName or weight in request body' });
    }

    const apiKey = process.env.ZHIPU_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ message: 'API Key is not configured on the server' });
    }

    const url = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
    const prompt = `作为一个营养专家，告诉我${weight}g${foodName}的营养，包括 热量、碳水、蛋白质、脂肪、类别（按照谷薯类、蔬菜类、水果类、大豆类、奶类、肉蛋类、坚果类、油类 正确归类），并把这些数据按照json字符串格式给我，不需要换行，直接转译为字符串给我（不需要提示json格式，不需要 \\n 之类的其他字符串）`;

    try {
        const response = await axios.post(url, {
            model: "GLM-4-Flash-250414",
            messages: [{ role: "user", content: prompt }]
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        // 将智谱AI的响应直接转发给前端
        res.status(200).json(response.data);

    } catch (error) {
        console.error('Error calling Zhipu AI API:', error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({ 
            message: 'Failed to fetch nutrition data from AI.',
            error: error.response ? error.response.data : error.message
        });
    }
}; 