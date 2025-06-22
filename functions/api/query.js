export async function onRequestPost(context) {
    const { request } = context;
    
    try {
        // 解析请求体
        const { foodName, weight } = await request.json();

        // 验证请求参数
        if (!foodName || !weight) {
            return new Response(JSON.stringify({ 
                message: 'Missing foodName or weight in request body' 
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            });
        }

        // 获取环境变量中的 API Key
        const apiKey = context.env.ZHIPU_API_KEY;

        if (!apiKey) {
            return new Response(JSON.stringify({ 
                message: 'API Key is not configured on the server' 
            }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            });
        }

        const url = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
        const prompt = `作为一个营养专家，告诉我${weight}g${foodName}的营养，包括 热量、碳水、蛋白质、脂肪、类别（按照谷薯类、蔬菜类、水果类、大豆类、奶类、肉蛋类、坚果类、油类 正确归类），并把这些数据按照json字符串格式给我，不需要换行，直接转译为字符串给我（不需要提示json格式，不需要 \\n 之类的其他字符串）`;

        // 使用 fetch 替代 axios
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "GLM-4-Flash-250414",
                messages: [{ role: "user", content: prompt }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API request failed with status ${response.status}: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();

        // 返回智谱AI的响应
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });

    } catch (error) {
        console.error('Error calling Zhipu AI API:', error);
        
        return new Response(JSON.stringify({ 
            message: 'Failed to fetch nutrition data from AI.',
            error: error.message
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type'
            }
        });
    }
}

// 处理 OPTIONS 请求（CORS 预检）
export async function onRequestOptions() {
    return new Response(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
} 