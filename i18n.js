/**
 * NLB eReads - i18n 多语言支持
 * 支持中文 (zh) 和英文 (en)
 * 使用方式：元素加 data-i18n="key" 属性，占位符用 data-i18n-placeholder="key"
 */

const I18N = {
  zh: {
    // 通用
    'app.name': 'NLB eReads',
    'app.tagline': '新加坡国家图书馆 · 正版电子书平台',
    'nav.home': '首页',
    'nav.search': '搜索',
    'nav.bookshelf': '我的书架',
    'nav.profile': '个人中心',
    'nav.help': '帮助客服',
    'nav.devices': '设备管理',
    'nav.login': '登录',
    'lang.toggle': 'EN',
    'lang.current': '中文',

    // 首页 - Nav
    'home.search.placeholder': '搜索书名、作者、ISBN...',
    'home.search.btn': 'AI搜索',
    'home.cat.all': '全部',
    'home.cat.fiction': '文学小说',
    'home.cat.history': '历史人文',
    'home.cat.tech': '科技商业',
    'home.cat.kids': '少儿读物',
    'home.cat.academic': '学术专著',
    'home.cat.local': '本地特色',

    // 首页 - Hero
    'home.hero.badge': '🎉 本月新书已上架 128 本',
    'home.hero.title': '探索无限知识世界',
    'home.hero.subtitle': '持有效借书证，免费借阅 50,000+ 正版电子书',
    'home.hero.btn.search': '开始找书',
    'home.hero.btn.shelf': '我的书架',
    'home.hero.stat.books': '电子书',
    'home.hero.stat.langs': '语种',
    'home.hero.stat.free': '免费',
    'home.hero.stat.free.sub': '持证借阅',

    // 首页 - 快捷入口
    'home.quick.shelf': '我的书架',
    'home.quick.borrowing': '借阅中',
    'home.quick.offline': '离线下载',
    'home.quick.push': '阅读器推送',
    'home.quick.hot': '热门借阅',
    'home.quick.local': '本地特色',
    'home.quick.profile': '个人中心',
    'home.quick.help': '帮助客服',

    // 首页 - 新书速递
    'home.newbooks.title': '新书速递',
    'home.newbooks.more': '查看全部',
    'home.status.available': '可借阅',
    'home.status.reserved': '预约中',
    'home.status.borrowed': '已借完',

    // 首页 - 公告
    'home.announce.title': '公告动态',
    'home.myborrow.title': '我的借阅',
    'home.myborrow.active': '借阅中',
    'home.myborrow.expiring': '即将到期',
    'home.myborrow.quota': '剩余额度',
    'home.myborrow.manage': '管理书架',

    // AI 搜索
    'ai.search.title': 'AI 智能搜索',
    'ai.search.analyzing': '正在理解您的搜索意图...',
    'ai.search.loading': 'AI 正在分析搜索意图...',
    'ai.search.more': '查看全部搜索结果',
    'ai.search.found': '找到 {n} 本相关书籍',
    'ai.search.summary.prefix': '已为您智能匹配',
    'ai.search.summary.books': '书籍，共找到以下结果：',
    'ai.search.summary.related': '与「{q}」相关的书籍，共找到以下结果：',
    'ai.search.tag.recommend': '高分推荐',

    // 登录页
    'login.title': '登录',
    'login.tab.card': '借书证登录',
    'login.tab.mobile': '手机验证码',
    'login.tab.nlb': 'NLB Mobile',
    'login.card.label': '借书证号',
    'login.card.placeholder': '请输入借书证号码',
    'login.pwd.label': '密码 / PIN',
    'login.pwd.placeholder': '请输入密码',
    'login.remember': '记住登录',
    'login.forgot': '忘记密码？',
    'login.btn': '登录平台',
    'login.mobile.phone.label': '手机号码',
    'login.mobile.phone.placeholder': '+65 请输入手机号',
    'login.mobile.code.label': '验证码',
    'login.mobile.code.placeholder': '6位验证码',
    'login.mobile.send': '发送验证码',
    'login.mobile.btn': '验证登录',
    'login.nlb.scan': '使用 NLB Mobile App 扫码登录',
    'login.nlb.hint': '打开 NLB Mobile → 扫一扫 → 扫描此二维码',
    'login.nlb.refresh': '刷新二维码',
    'login.nlb.refreshing': '刷新中...',
    'login.nlb.btn': '已扫码，进入平台',
    'login.other': '其他方式',
    'login.qr': '扫码登录',
    'login.family': '家属代绑',
    'login.access.title': '无障碍辅助入口',
    'login.access.desc': '大字模式 · 语音朗读 · 高对比度',
    'login.access.btn': '开启',
    'login.free': '持有效借书证可',
    'login.free.highlight': '免费借阅',
    'login.free.suffix': '所有电子书',
    'login.guide': '办证指引',
    'login.copyright': '© 2025 National Library Board Singapore · 版权合规平台',
    'login.countdown': '{n}s 后重发',

    // AI 客服
    'ai.chat.title': 'NLB 智能客服',
    'ai.chat.online': '在线 · 通常即时回复',
    'ai.chat.greeting': '您好！我是 NLB eReads 智能客服 📚<br><br>我可以帮您解答借阅、续借、推送、账号等各类问题，请问有什么可以帮到您？',
    'ai.chat.just.now': '刚刚',
    'ai.chat.placeholder': '输入您的问题...',
    'ai.chat.fab.label': '✨ AI 智能客服',
    'ai.chat.fab.title': 'AI 智能客服',
    'ai.chat.default': '感谢您的提问！您可以拨打客服热线 <strong>6332 3255</strong>（每日 10:00–21:00）或发送邮件至 <strong>enquiry@nlb.gov.sg</strong> 获得进一步帮助。还有其他问题吗？',
    'ai.chip.borrow': '如何借阅？',
    'ai.chip.renew': '如何续借？',
    'ai.chip.kindle': '推送Kindle',
    'ai.chip.quota': '借阅额度',
    'ai.chip.card': '忘记证号',
    'ai.chip.device': '支持设备',
    'ai.chip.overdue': '逾期政策',
    'ai.chip.borrow.q': '如何借阅电子书？',
    'ai.chip.renew.q': '如何续借书籍？',
    'ai.chip.kindle.q': '如何推送到Kindle？',
    'ai.chip.quota.q': '借阅额度是多少？',
    'ai.chip.card.q': '忘记借书证号怎么办？',
    'ai.chip.device.q': '支持哪些阅读器？',
    'ai.chip.overdue.q': '逾期会有罚款吗？',

    // 搜索页
    'search.title': '搜索',
    'search.placeholder': '搜索书名、作者、ISBN...',
    'search.filter.lang': '语种',
    'search.filter.cat': '分类',
    'search.filter.year': '出版年份',
    'search.filter.status': '借阅状态',
    'search.filter.available': '可借阅',
    'search.filter.reserved': '预约中',
    'search.filter.borrowed': '已借完',
    'search.results': '搜索结果',
    'search.sort.relevance': '相关度',
    'search.sort.rating': '评分',
    'search.sort.newest': '最新',
    'search.btn': '搜索',
    'search.reset': '重置',

    // 书架页
    'bookshelf.title': '我的书架',
    'bookshelf.tab.borrowing': '借阅中',
    'bookshelf.tab.reserved': '预约中',
    'bookshelf.tab.history': '借阅历史',
    'bookshelf.tab.offline': '离线下载',
    'bookshelf.renew': '续借',
    'bookshelf.read': '继续阅读',
    'bookshelf.push': '推送',
    'bookshelf.download': '下载',
    'bookshelf.due': '到期',
    'bookshelf.days.left': '天后到期',
    'bookshelf.quota': '借阅额度',
    'bookshelf.quota.used': '已用',
    'bookshelf.quota.remain': '剩余',

    // 书籍详情
    'book.borrow': '立即借阅',
    'book.reserve': '加入预约',
    'book.read.online': '在线阅读',
    'book.push.device': '推送至设备',
    'book.download': '下载',
    'book.status.available': '可借阅',
    'book.status.reserved': '预约中',
    'book.status.borrowed': '已借完',
    'book.detail.author': '作者',
    'book.detail.publisher': '出版社',
    'book.detail.year': '出版年份',
    'book.detail.lang': '语言',
    'book.detail.category': '分类',
    'book.detail.isbn': 'ISBN',
    'book.detail.pages': '页数',
    'book.detail.rating': '评分',
    'book.detail.desc': '内容简介',
    'book.detail.similar': '相关推荐',

    // 个人中心
    'profile.title': '个人中心',
    'profile.card.no': '借书证号',
    'profile.member.since': '会员自',
    'profile.edit': '编辑资料',
    'profile.settings': '设置',
    'profile.logout': '退出登录',
    'profile.stats.borrowed': '累计借阅',
    'profile.stats.reading': '阅读中',
    'profile.stats.finished': '已读完',
    'profile.notification': '通知设置',
    'profile.language': '语言设置',
    'profile.accessibility': '无障碍',
    'profile.about': '关于平台',

    // 帮助页
    'help.title': '帮助与客服',
    'help.faq': '常见问题',
    'help.contact': '联系我们',
    'help.hotline': '客服热线',
    'help.email': '电子邮件',
    'help.hours': '服务时间',
    'help.hours.value': '每日 10:00–21:00',

    // 设备管理
    'devices.title': '设备管理',
    'devices.add': '添加设备',
    'devices.kindle': 'Kindle',
    'devices.kobo': 'Kobo',
    'devices.boox': '文石 BOOX',
    'devices.ireader': '掌阅 iReader',
    'devices.push': '推送',
    'devices.remove': '移除',
    'devices.max': '最多可绑定 3 台设备',

    // 阅读页
    'reading.title': '在线阅读',
    'reading.back': '返回',
    'reading.toc': '目录',
    'reading.settings': '设置',
    'reading.font.size': '字体大小',
    'reading.theme': '主题',
    'reading.progress': '阅读进度',

    // 公告弹窗
    'announce.close': '关闭',
  },

  en: {
    // Common
    'app.name': 'NLB eReads',
    'app.tagline': 'National Library Board Singapore · Digital Books Platform',
    'nav.home': 'Home',
    'nav.search': 'Search',
    'nav.bookshelf': 'My Shelf',
    'nav.profile': 'Profile',
    'nav.help': 'Help',
    'nav.devices': 'Devices',
    'nav.login': 'Login',
    'lang.toggle': '中文',
    'lang.current': 'EN',

    // Home - Nav
    'home.search.placeholder': 'Search title, author, ISBN...',
    'home.search.btn': 'AI Search',
    'home.cat.all': 'All',
    'home.cat.fiction': 'Fiction',
    'home.cat.history': 'History',
    'home.cat.tech': 'Tech & Business',
    'home.cat.kids': "Children's",
    'home.cat.academic': 'Academic',
    'home.cat.local': 'Local',

    // Home - Hero
    'home.hero.badge': '🎉 128 new books added this month',
    'home.hero.title': 'Explore a World of Knowledge',
    'home.hero.subtitle': 'Free access to 50,000+ books with a valid library card',
    'home.hero.btn.search': 'Find Books',
    'home.hero.btn.shelf': 'My Shelf',
    'home.hero.stat.books': 'eBooks',
    'home.hero.stat.langs': 'Languages',
    'home.hero.stat.free': 'Free',
    'home.hero.stat.free.sub': 'with card',

    // Home - Quick Actions
    'home.quick.shelf': 'My Shelf',
    'home.quick.borrowing': 'Borrowing',
    'home.quick.offline': 'Downloads',
    'home.quick.push': 'Push to Device',
    'home.quick.hot': 'Popular',
    'home.quick.local': 'Local Picks',
    'home.quick.profile': 'Profile',
    'home.quick.help': 'Help',

    // Home - New Books
    'home.newbooks.title': 'New Arrivals',
    'home.newbooks.more': 'View All',
    'home.status.available': 'Available',
    'home.status.reserved': 'Reserved',
    'home.status.borrowed': 'Borrowed',

    // Home - Announcements
    'home.announce.title': 'Announcements',
    'home.myborrow.title': 'My Borrowing',
    'home.myborrow.active': 'Active',
    'home.myborrow.expiring': 'Expiring Soon',
    'home.myborrow.quota': 'Quota Left',
    'home.myborrow.manage': 'Manage Shelf',

    // AI Search
    'ai.search.title': 'AI Smart Search',
    'ai.search.analyzing': 'Understanding your search intent...',
    'ai.search.loading': 'AI is analyzing your query...',
    'ai.search.more': 'View All Results',
    'ai.search.found': 'Found {n} related books',
    'ai.search.summary.prefix': 'Smart match for',
    'ai.search.summary.books': 'books, results below:',
    'ai.search.summary.related': 'Results related to "{q}":',
    'ai.search.tag.recommend': 'Top Rated',

    // Login
    'login.title': 'Login',
    'login.tab.card': 'Library Card',
    'login.tab.mobile': 'Mobile OTP',
    'login.tab.nlb': 'NLB Mobile',
    'login.card.label': 'Library Card No.',
    'login.card.placeholder': 'Enter your library card number',
    'login.pwd.label': 'Password / PIN',
    'login.pwd.placeholder': 'Enter your password',
    'login.remember': 'Remember me',
    'login.forgot': 'Forgot password?',
    'login.btn': 'Sign In',
    'login.mobile.phone.label': 'Mobile Number',
    'login.mobile.phone.placeholder': '+65 Enter mobile number',
    'login.mobile.code.label': 'OTP Code',
    'login.mobile.code.placeholder': '6-digit OTP',
    'login.mobile.send': 'Send OTP',
    'login.mobile.btn': 'Verify & Login',
    'login.nlb.scan': 'Scan with NLB Mobile App to login',
    'login.nlb.hint': 'Open NLB Mobile → Scan → Scan this QR code',
    'login.nlb.refresh': 'Refresh QR Code',
    'login.nlb.refreshing': 'Refreshing...',
    'login.nlb.btn': 'Scanned, Enter Platform',
    'login.other': 'Other options',
    'login.qr': 'QR Login',
    'login.family': 'Family Account',
    'login.access.title': 'Accessibility',
    'login.access.desc': 'Large text · Screen reader · High contrast',
    'login.access.btn': 'Enable',
    'login.free': 'Free access to all eBooks with a',
    'login.free.highlight': 'valid library card',
    'login.free.suffix': '',
    'login.guide': 'Get a card',
    'login.copyright': '© 2025 National Library Board Singapore',
    'login.countdown': 'Resend in {n}s',

    // AI Chat
    'ai.chat.title': 'NLB Smart Assistant',
    'ai.chat.online': 'Online · Usually replies instantly',
    'ai.chat.greeting': 'Hello! I\'m the NLB eReads Smart Assistant 📚<br><br>I can help with borrowing, renewals, device push, account queries and more. How can I help you?',
    'ai.chat.just.now': 'just now',
    'ai.chat.placeholder': 'Type your question...',
    'ai.chat.fab.label': '✨ AI Assistant',
    'ai.chat.fab.title': 'AI Smart Assistant',
    'ai.chat.default': 'Thank you for your question! You can call our hotline <strong>6332 3255</strong> (daily 10:00–21:00) or email <strong>enquiry@nlb.gov.sg</strong> for further assistance. Any other questions?',
    'ai.chip.borrow': 'How to borrow?',
    'ai.chip.renew': 'How to renew?',
    'ai.chip.kindle': 'Push to Kindle',
    'ai.chip.quota': 'Borrow quota',
    'ai.chip.card': 'Lost card no.',
    'ai.chip.device': 'Supported devices',
    'ai.chip.overdue': 'Overdue policy',
    'ai.chip.borrow.q': 'How do I borrow an eBook?',
    'ai.chip.renew.q': 'How do I renew a book?',
    'ai.chip.kindle.q': 'How do I push to Kindle?',
    'ai.chip.quota.q': 'What is my borrow quota?',
    'ai.chip.card.q': 'I forgot my library card number',
    'ai.chip.device.q': 'Which e-readers are supported?',
    'ai.chip.overdue.q': 'Are there overdue fines?',

    // Search
    'search.title': 'Search',
    'search.placeholder': 'Search title, author, ISBN...',
    'search.filter.lang': 'Language',
    'search.filter.cat': 'Category',
    'search.filter.year': 'Year',
    'search.filter.status': 'Status',
    'search.filter.available': 'Available',
    'search.filter.reserved': 'Reserved',
    'search.filter.borrowed': 'Borrowed',
    'search.results': 'Results',
    'search.sort.relevance': 'Relevance',
    'search.sort.rating': 'Rating',
    'search.sort.newest': 'Newest',
    'search.btn': 'Search',
    'search.reset': 'Reset',

    // Bookshelf
    'bookshelf.title': 'My Shelf',
    'bookshelf.tab.borrowing': 'Borrowing',
    'bookshelf.tab.reserved': 'Reserved',
    'bookshelf.tab.history': 'History',
    'bookshelf.tab.offline': 'Downloads',
    'bookshelf.renew': 'Renew',
    'bookshelf.read': 'Continue Reading',
    'bookshelf.push': 'Push',
    'bookshelf.download': 'Download',
    'bookshelf.due': 'Due',
    'bookshelf.days.left': 'days left',
    'bookshelf.quota': 'Borrow Quota',
    'bookshelf.quota.used': 'Used',
    'bookshelf.quota.remain': 'Remaining',

    // Book Detail
    'book.borrow': 'Borrow Now',
    'book.reserve': 'Reserve',
    'book.read.online': 'Read Online',
    'book.push.device': 'Push to Device',
    'book.download': 'Download',
    'book.status.available': 'Available',
    'book.status.reserved': 'Reserved',
    'book.status.borrowed': 'Borrowed',
    'book.detail.author': 'Author',
    'book.detail.publisher': 'Publisher',
    'book.detail.year': 'Year',
    'book.detail.lang': 'Language',
    'book.detail.category': 'Category',
    'book.detail.isbn': 'ISBN',
    'book.detail.pages': 'Pages',
    'book.detail.rating': 'Rating',
    'book.detail.desc': 'Description',
    'book.detail.similar': 'You May Also Like',

    // Profile
    'profile.title': 'Profile',
    'profile.card.no': 'Card No.',
    'profile.member.since': 'Member since',
    'profile.edit': 'Edit Profile',
    'profile.settings': 'Settings',
    'profile.logout': 'Sign Out',
    'profile.stats.borrowed': 'Total Borrowed',
    'profile.stats.reading': 'Reading',
    'profile.stats.finished': 'Finished',
    'profile.notification': 'Notifications',
    'profile.language': 'Language',
    'profile.accessibility': 'Accessibility',
    'profile.about': 'About',

    // Help
    'help.title': 'Help & Support',
    'help.faq': 'FAQ',
    'help.contact': 'Contact Us',
    'help.hotline': 'Hotline',
    'help.email': 'Email',
    'help.hours': 'Hours',
    'help.hours.value': 'Daily 10:00–21:00',

    // Devices
    'devices.title': 'Device Management',
    'devices.add': 'Add Device',
    'devices.kindle': 'Kindle',
    'devices.kobo': 'Kobo',
    'devices.boox': 'BOOX',
    'devices.ireader': 'iReader',
    'devices.push': 'Push',
    'devices.remove': 'Remove',
    'devices.max': 'Up to 3 devices can be linked',

    // Reading
    'reading.title': 'Read Online',
    'reading.back': 'Back',
    'reading.toc': 'Contents',
    'reading.settings': 'Settings',
    'reading.font.size': 'Font Size',
    'reading.theme': 'Theme',
    'reading.progress': 'Progress',

    // Announce modal
    'announce.close': 'Close',
  }
};

/**
 * 获取当前语言，默认中文
 */
function getLang() {
  return localStorage.getItem('nlb_lang') || 'zh';
}

/**
 * 翻译单个 key，支持 {n} {q} 等插值
 */
function t(key, vars) {
  const lang = getLang();
  let str = (I18N[lang] && I18N[lang][key]) || (I18N['zh'][key]) || key;
  if (vars) {
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    });
  }
  return str;
}

/**
 * 应用翻译到当前页面所有 data-i18n 元素
 */
function applyI18n() {
  const lang = getLang();
  // 更新 html lang 属性
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // 文本内容
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      // 不处理 input 文本，用 placeholder 属性
    } else {
      el.innerHTML = val;
    }
  });

  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });

  // title 属性
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.getAttribute('data-i18n-title'));
  });

  // 语言切换按钮文字
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = t('lang.toggle');
}

/**
 * 切换语言并刷新页面翻译
 */
function switchLang() {
  const current = getLang();
  const next = current === 'zh' ? 'en' : 'zh';
  localStorage.setItem('nlb_lang', next);
  applyI18n();
  // 通知 nav.js 重新渲染动态内容
  $(document).trigger('nlb:langchange', [next]);
}

// DOM 就绪后自动应用
$(function () {
  applyI18n();
});
