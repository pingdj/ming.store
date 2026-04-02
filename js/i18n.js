// 语言包
const translations = {
    'zh': {
        // 导航
        nav_features: '核心功能', nav_chains: '支持公链', nav_ai: 'AI 智能',
        nav_channels: '推送渠道', nav_faq: '常见问题', nav_screenshot: '软件实图', nav_contact: '联系作者',
        // Hero
        hero_badge: '<i class="fas fa-bolt"></i> 全链监控 · AI 深度赋能 · 新项目雷达',
        hero_title: 'Web3 多功能监控系统<br>实时守护数字资产',
        hero_desc: 'EVM + Solana 双链实时追踪，AI 解读大额交易与风险，RootData 新项目自动推送，GeckoTerminal 链上土狗雷达，CryptoRank 项目跟踪，Web3 AI 助手。为专业交易者打造的一站式链上哨兵。',
        hero_contact: '联系作者', hero_demo: '观看演示',
        hero_stat1: '主流公链', hero_stat2: '实时监控', hero_stat3: '交易解读',
        hero_mock_tip: '链上仪表盘 · 毫秒级推送 · 悬浮窗通知',
        // 功能卡片
        features_title: '⚡ 不止于监控，更是智能分析中枢',
        features_sub: '从链上数据到AI解读，再到新项目发现，每一步都为您的资产安全与投资决策服务。',
        f1_title: 'EVM + Solana 双链并行', f1_desc: '支持 Ethereum、BSC、Polygon、Arbitrum、Base 及 Solana 链上实时交易追踪，原生币、ERC20/SPL代币、NFT 变动无遗漏。多WSS节点自动轮换，高可用连接。',
        f2_title: 'AI 深度交易解读', f2_desc: '集成 DeepSeek 大模型，自动分析大额转账、风险评分、资金流向，生成专业交易解读与操作建议。支持情感化评语，让监控更生动。',
        f3_title: '链上土狗雷达 · GeckoTerminal', f3_desc: '实时抓取 Solana、Ethereum、BSC 等链上新上线交易对，展示价格、流动性、成交量，支持 AI 解读项目风险，第一时间发现潜力 Meme 币。',
        f4_title: 'CryptoRank & RootData 新项目', f4_desc: '自动同步 CryptoRank 最新项目库，RootData 新项目实时推送，附带融资信息、社交链接，帮助您抢占一级市场先机。',
        f5_title: '多端实时推送 + 悬浮窗', f5_desc: 'Telegram、Discord、邮件、语音播报，重磅交易高亮提醒。桌面悬浮窗实时显示资产变动和RootData新项目，不错过任何重要动态。',
        f6_title: '交易仪表盘 + AI 日报/周报', f6_desc: '每日流入/流出统计图表，AI 自动生成投资摘要日报与周报，资产动向可视化，辅助决策。',
        f7_title: 'Web3 AI 助手', f7_desc: '内置 AI 聊天机器人，支持联网搜索（Moonshot）或离线知识（DeepSeek），可查询实时新闻、项目分析、市场解读，多会话管理。',
        f8_title: '可视化配置 + 代理支持', f8_desc: '前端界面直接编辑 JSON 配置文件，修改后自动重启子进程。支持 HTTP/Socks 代理，国内网络无障碍使用。',
        // 公链
        chains_title: '🌐 覆盖主流生态，无缝对接', chains_sub: '一次配置，多链监控，支持自定义RPC与WebSocket节点，高可用自动切换。',
        stat1_title: '实时事件', stat1_desc: 'WSS 推送 & RPC 轮询',
        stat2_title: '资产安全', stat2_desc: '本地化存储，隐私优先',
        stat3_title: '自定义告警', stat3_desc: '阈值/大额/多钱包',
        // 在 zh 对象中添加
        mock_ai: 'AI 解读',
        mock_radar: '新币雷达',
        mock_large: '大额转账',
        mock_address: '监控地址',
        // 推送渠道
        channels_title: '📢 多渠道实时推送 · 不错过任何重要动态', channels_sub: '无论您使用哪种通讯工具，都能第一时间收到链上警报。',
        ch_tg: 'Telegram', ch_tg_desc: '机器人即时推送，支持自定义频道',
        ch_dc: 'Discord', ch_dc_desc: '嵌入式通知，精美卡片展示交易详情',
        ch_email: '邮件', ch_email_desc: 'SSL加密发送，支持SMTP配置',
        ch_voice: '语音播报', ch_voice_desc: '大额交易语音提醒，可自定义音频',
        ch_floating: '桌面悬浮窗', ch_floating_desc: '实时滚动通知，不干扰工作流',
        ch_future: '钉钉/飞书（即将支持）', ch_future_desc: '企业级消息推送',
        // FAQ
        faq_title: '❓ 常见问题', faq_sub: '您可能关心的问题，答案都在这里。',
        q1: '支持哪些公链？', a1: '目前支持 Ethereum、BSC、Polygon、Arbitrum、Base 五条 EVM 链，以及 Solana。后续将增加 Aptos、Sui 等非EVM链。',
        q2: '需要自己准备节点 RPC 吗？', a2: '不需要。系统内置了公共 RPC 和 WSS 节点，开箱即用。也支持自定义添加私有节点，提高稳定性。',
        q3: 'AI 解读功能是否需要额外付费？', a3: '完全免费。系统已内置 DeepSeek API 密钥，无需您自行注册或充值。',
        q4: '如何获取软件和激活码？', a4: '请通过页面上的「联系作者」按钮获取下载链接和激活码。软件为绿色免安装版，支持 Windows 10/11。',
        q5: '数据会泄露吗？', a5: '所有监控数据（交易记录、余额快照）仅存储在您本地电脑的 SQLite 数据库中，不会上传到任何服务器，隐私安全有保障。',
        q6: '国内网络无法连接链上节点怎么办？', a6: '软件内置代理配置功能，您只需填写本机代理地址（如 http://127.0.0.1:7897），即可通过代理访问 RPC/WSS。',
        // 版本亮点
        changelog_title: '📌 版本亮点 · V10 全新升级', changelog_sub: '持续迭代，只为更专业的链上监控体验。',
        cl1_title: '✨ 新增桌面悬浮窗', cl1_desc: '实时滚动显示资产变动和RootData新项目，置顶显示，不影响其他操作。',
        cl2_title: '🐕 链上土狗雷达（GeckoTerminal）', cl2_desc: '支持 Solana、Ethereum、BSC 等链上新交易对监控，价格、流动性、成交量一目了然，支持 AI 解读。',
        cl3_title: '🤖 Web3 AI 助手', cl3_desc: '内置多会话聊天机器人，支持联网搜索和离线知识库，可查询最新新闻、项目分析。',
        cl4_title: '📊 交易仪表盘 + AI 日报/周报', cl4_desc: '图表化展示每日流入流出，AI 自动生成投资摘要。',
        cl5_title: 'RootData 新项目实时推送', cl5_desc: '第一时间捕获一级市场新项目，附带融资、社交信息。',
        // AI 模块
        ai_title: '🤖 AI 智能助手 · 让链上数据开口说话', ai_sub: '集成深度求索 (DeepSeek) 大模型与 Moonshot 联网搜索，为您提供交易解读、项目分析、每日快评与投资建议。',
        ai_card1_title: '交易解读', ai_card1_desc: '自动识别交易意图，分析风险等级，给出操作建议，帮助您理解链上行为。',
        ai_card2_title: 'AI 日报 / 周报', ai_card2_desc: '汇总过去24小时/7天交易记录，生成专业投资摘要，资产趋势一目了然。',
        ai_card3_title: '语音播报 + 情绪文字', ai_card3_desc: '大额交易语音提醒，AI 生成趣味性评语，让监控更生动。',
        ai_demo_title: 'AI 助手示例', ai_demo_sub: ' 实时解读大额转账',
        ai_demo_content: '<i class="fas fa-exchange-alt"></i> 监测到 0x742... 地址转出 1,250 ETH（价值约 $2.3M）<br>🤖 AI解读：大额资金疑似交易所归集，风险较低，但需留意后续地址动态。<span style="color:#a78bfa;"> 风险等级：中</span><br>😄 [DeepSeek] 钱包变瘦，心在滴血，但别慌，交易所大额归集而已～',
        // 截图
        screenshot_title: '📸 软件实图 · 界面一览', screenshot_sub: '简洁现代，多维度监控面板，真实操作界面截图',
        screenshot1: '实时仪表盘 · 多链状态总览', screenshot2: '币安现货和ALPHA', screenshot3: '链上雷达实时监控',
        screenshot4: 'CryptoRank跟踪', screenshot5: 'RootData项目推送', screenshot6: '交易仪表盘', screenshot7: 'WEB3助手',
        // CTA
        cta_title: '🚀 立即部署，掌控链上先机', cta_desc: '桌面应用 · 绿色免安装 · 支持 Windows 10/11', cta_btn: '联系作者', cta_footer: '⚡ 软件定制 · 持续更新',
        // Footer
        footer_copyright: '© 2026 潇楠Web3实验室 | 数据源于链上公开API，不构成投资建议。为Web3安全贡献一份力。',
        footer_contact: '<i class="fab fa-github"></i> 软件获取 · <i class="fab fa-twitter"></i> pingdj@vip.qq.com',
        // Modal
        modal_title: '联系作者', modal_email: '邮箱：pingdj@vip.qq.com', modal_wechat: '微信：CaiLai246', modal_close: '关闭'
    },
    'en': {
        nav_features: 'Core Features', nav_chains: 'Supported Chains', nav_ai: 'AI Intelligence',
        nav_channels: 'Channels', nav_faq: 'FAQ', nav_screenshot: 'Screenshots', nav_contact: 'Contact',
        hero_badge: '<i class="fas fa-bolt"></i> Multi-Chain Monitor · AI Powered · New Project Radar',
        hero_title: 'Web3 Multi-Function Monitor<br>Real-time Asset Protection',
        hero_desc: 'EVM + Solana real-time tracking, AI interpretation of large transactions, RootData new project alerts, GeckoTerminal on-chain scanner, CryptoRank tracking, Web3 AI assistant. One-stop on-chain sentinel for professional traders.',
        hero_contact: 'Contact', hero_demo: 'Watch Demo',
        hero_stat1: 'Main Chains', hero_stat2: '24/7 Monitoring', hero_stat3: 'AI Analysis',
        hero_mock_tip: 'Dashboard · Millisecond Push · Floating Widget',
        features_title: '⚡ More than Monitoring, an Intelligence Hub',
        features_sub: 'From on-chain data to AI analysis and new project discovery, every step serves your asset security and investment decisions.',
        f1_title: 'EVM + Solana Dual-Chain', f1_desc: 'Real-time tracking on Ethereum, BSC, Polygon, Arbitrum, Base and Solana for native coins, ERC20/SPL tokens, NFTs. Automatic WSS node failover.',
        f2_title: 'AI Deep Transaction Insights', f2_desc: 'DeepSeek-powered analysis of large transfers, risk scoring, fund flows, generating professional insights and suggestions. Emotional comments for fun.',
        f3_title: 'On-Chain Scanner · GeckoTerminal', f3_desc: 'Real-time new pairs on Solana, Ethereum, BSC with price, liquidity, volume. AI interpretation of project risks to catch potential Meme coins early.',
        f4_title: 'CryptoRank & RootData New Projects', f4_desc: 'Auto-sync latest projects from CryptoRank, real-time RootData pushes with funding and social links, helping you seize primary market opportunities.',
        f5_title: 'Multi-Channel Push + Floating Widget', f5_desc: 'Telegram, Discord, Email, Voice, Floating widget. Large transactions highlighted. Never miss critical on-chain movements.',
        f6_title: 'Dashboard + AI Daily/Weekly Reports', f6_desc: 'Daily inflow/outflow charts, AI-generated investment summaries for trend visualization.',
        f7_title: 'Web3 AI Assistant', f7_desc: 'Built-in chatbot with web search (Moonshot) or offline knowledge (DeepSeek) for real-time news, project analysis, market insights. Multi-session management.',
        f8_title: 'Visual Config + Proxy Support', f8_desc: 'Edit JSON configs from frontend, auto-restart subprocesses. HTTP/Socks proxy support for seamless access in restricted networks.',
        chains_title: '🌐 Covering Major Ecosystems', chains_sub: 'One config, multi-chain monitoring, custom RPC/WSS nodes, auto failover.',
        stat1_title: 'Real-time Events', stat1_desc: 'WSS Push & RPC Polling',
        stat2_title: 'Asset Security', stat2_desc: 'Local Storage, Privacy First',
        stat3_title: 'Custom Alerts', stat3_desc: 'Thresholds/Large Tx/Multi-wallet',
        channels_title: '📢 Multi-Channel Real-time Push', channels_sub: 'Get on-chain alerts instantly on your favorite tools.',
        ch_tg: 'Telegram', ch_tg_desc: 'Bot instant push, custom channels',
        ch_dc: 'Discord', ch_dc_desc: 'Embedded notifications with rich cards',
        ch_email: 'Email', ch_email_desc: 'SSL encrypted, SMTP configurable',
        ch_voice: 'Voice Alert', ch_voice_desc: 'Large transaction voice alert, custom audio',
        ch_floating: 'Desktop Floating Widget', ch_floating_desc: 'Scrolling notifications, non-intrusive',
        ch_future: 'DingTalk/Feishu (Coming)', ch_future_desc: 'Enterprise messaging',
        faq_title: '❓ Frequently Asked Questions', faq_sub: 'Answers to your concerns.',
        // 在 en 对象中添加
        mock_ai: 'AI Insight',
        mock_radar: 'New Radar',
        mock_large: 'Large Transfer',
        mock_address: 'Watched Addresses',
        q1: 'Which chains are supported?', a1: 'Currently Ethereum, BSC, Polygon, Arbitrum, Base (EVM) and Solana. Aptos, Sui and other non-EVM chains coming soon.',
        q2: 'Do I need my own RPC nodes?', a2: 'No. Built-in public RPC/WSS nodes work out of the box. You can also add custom private nodes for better stability.',
        q3: 'Is AI interpretation free?', a3: 'Yes, completely free. DeepSeek API key is pre-configured, no registration or payment required.',
        q4: 'How to get the software and license key?', a4: 'Click "Contact" button on this page to get download link and license key. Green portable version for Windows 10/11.',
        q5: 'Will my data be leaked?', a5: 'All monitoring data (transactions, balance snapshots) are stored locally in SQLite database, never uploaded to any server. Privacy guaranteed.',
        q6: 'Cannot connect to nodes from China?', a6: 'Built-in proxy config allows you to set local proxy address (e.g., http://127.0.0.1:7897) to access RPC/WSS.',
        changelog_title: '📌 Release Highlights · V10', changelog_sub: 'Continuous iteration for professional on-chain monitoring.',
        cl1_title: '✨ Desktop Floating Widget', cl1_desc: 'Real-time scrolling asset changes and RootData new projects, always on top without disturbing work.',
        cl2_title: '🐕 On-Chain Scanner (GeckoTerminal)', cl2_desc: 'Monitor new pairs on Solana, Ethereum, BSC with price, liquidity, volume. AI interpretation.',
        cl3_title: '🤖 Web3 AI Assistant', cl3_desc: 'Multi-session chatbot with web search and offline knowledge for news, project analysis.',
        cl4_title: '📊 Dashboard + AI Daily/Weekly Reports', cl4_desc: 'Charts for daily inflows/outflows, AI-generated investment summaries.',
        cl5_title: 'RootData New Project Push', cl5_desc: 'Real-time capture of primary market projects with funding and social info.',
        ai_title: '🤖 AI Assistant · Making On-Chain Data Talk', ai_sub: 'DeepSeek + Moonshot (web search) for transaction insights, project analysis, daily comments and investment advice.',
        ai_card1_title: 'Transaction Insight', ai_card1_desc: 'Auto-identify intent, risk level, suggestions to understand on-chain behavior.',
        ai_card2_title: 'AI Daily/Weekly Reports', ai_card2_desc: 'Summarize last 24h/7d transactions for professional investment abstracts.',
        ai_card3_title: 'Voice + Emotional Text', ai_card3_desc: 'Voice alert for large transactions, AI-generated witty comments.',
        ai_demo_title: 'AI Assistant Example', ai_demo_sub: ' Real-time large transfer analysis',
        ai_demo_content: '<i class="fas fa-exchange-alt"></i> Detected 0x742... sent 1,250 ETH (~$2.3M)<br>🤖 AI: Large funds likely exchange consolidation, low risk, but monitor follow-up movements.<span style="color:#a78bfa;"> Risk: Medium</span><br>😄 [DeepSeek] Wallet got lighter, but don\'t panic, just exchange consolidation.',
        screenshot_title: '📸 Software Screenshots', screenshot_sub: 'Clean modern dashboard, real operation screenshots',
        screenshot1: 'Dashboard · Multi-Chain Status', screenshot2: 'Binance Spot & ALPHA', screenshot3: 'On-Chain Scanner',
        screenshot4: 'CryptoRank Tracking', screenshot5: 'RootData Project Push', screenshot6: 'Transaction Dashboard', screenshot7: 'Web3 Assistant',
        cta_title: '🚀 Deploy Now, Master On-Chain Opportunities', cta_desc: 'Desktop App · Portable · Windows 10/11', cta_btn: 'Contact', cta_footer: '⚡ Customization · Continuous Updates',
        footer_copyright: '© 2026 XiaoNan Web3 Lab | Data from public on-chain APIs, not investment advice. Contributing to Web3 security.',
        footer_contact: '<i class="fab fa-github"></i> Get Software · <i class="fab fa-twitter"></i> pingdj@vip.qq.com',
        modal_title: 'Contact', modal_email: 'Email: pingdj@vip.qq.com', modal_wechat: 'WeChat: CaiLai246', modal_close: 'Close'
    }
};

let currentLang = 'zh';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;
    // 遍历所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            // 如果元素内部包含 HTML 标签，使用 innerHTML；否则 textContent
            if (el.innerHTML && (el.innerHTML.includes('<') || t[key].includes('<'))) {
                el.innerHTML = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    // 更新页面标题、meta 描述等
    document.title = lang === 'zh' ? '潇 楠 Web3哨兵 | 多链实时监控 · AI交易解读 · 新项目预警 · 链上雷达' : 'XiaoNan Web3 Sentinel | Multi-Chain Monitor · AI Analysis · New Project Alerts';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', lang === 'zh' ? '潇楠Web3哨兵 — 专业级链上监控系统。支持Ethereum、BSC、Solana等10+公链，实时追踪大额转账/代币/NFT，集成DeepSeek AI解读交易风险，RootData新项目自动推送，GeckoTerminal链上土狗雷达，CryptoRank项目跟踪，Web3 AI助手与悬浮窗通知。为交易者提供一站式智能哨兵服务。' : 'XiaoNan Web3 Sentinel - professional on-chain monitoring system supporting Ethereum, BSC, Solana, etc. Real-time large transfer/token/NFT tracking, DeepSeek AI risk interpretation, RootData new project alerts, GeckoTerminal on-chain scanner, Web3 AI assistant.');
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', lang === 'zh' ? '潇楠Web3哨兵 | 多链实时监控 · AI交易解读 · 新项目预警' : 'XiaoNan Web3 Sentinel | Multi-Chain Monitor · AI Analysis · New Project Alerts');
    }
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
        ogDesc.setAttribute('content', lang === 'zh' ? '专业级Web3监控系统：EVM+Solana双链并行，AI深度解读大额交易，RootData新项目预警，GeckoTerminal链上土狗雷达，Web3 AI助手。' : 'Professional Web3 monitoring: EVM+Solana dual-chain, AI deep analysis of large transactions, RootData new project alerts, GeckoTerminal on-chain scanner, Web3 AI assistant.');
    }
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', lang === 'zh' ? '潇楠Web3哨兵 | 多链实时监控 · AI交易解读 · 新项目预警' : 'XiaoNan Web3 Sentinel | Multi-Chain Monitor · AI Analysis');
    }
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
        twitterDesc.setAttribute('content', lang === 'zh' ? 'EVM+Solana双链并行，AI深度交易解读，GeckoTerminal链上土狗雷达，RootData新项目推送，Web3 AI助手。' : 'EVM+Solana dual-chain, AI deep transaction insights, GeckoTerminal on-chain scanner, RootData new project pushes, Web3 AI assistant.');
    }
    // 切换按钮文字
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.textContent = lang === 'zh' ? '🌐 English' : '🌐 中文';
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'zh' ? 'en' : 'zh';
            setLanguage(newLang);
        });
    }
    // 默认中文
    setLanguage('zh');
});