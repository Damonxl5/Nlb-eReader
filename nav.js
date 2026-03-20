/**
 * NLB eReads - 全局导航跳转逻辑
 * 所有页面引入此文件，统一处理页面间跳转
 * 在 index.html iframe 环境中通过 parent.navigateTo() 跳转
 * 独立打开时直接 window.location.href 跳转
 */

// 页面路由映射
const ROUTES = {
  login:       'login.html',
  home:        'home.html',
  search:      'search.html',
  'book-detail': 'book-detail.html',
  reading:     'reading.html',
  bookshelf:   'bookshelf.html',
  profile:     'profile.html',
  help:        'help.html',
  devices:     'devices.html',
  'ai-chat':   'ai-chat.html',
};

/**
 * 核心跳转函数
 * @param {string} page - 路由 key，如 'home'、'book-detail'
 */
function navigateTo(page) {
  const url = ROUTES[page];
  if (!url) return;
  // 在 iframe 内时，通知父页面切换 iframe src
  if (window.self !== window.top && typeof window.parent.switchPage === 'function') {
    window.parent.switchPage(page, url);
  } else {
    window.location.href = url;
  }
}

// jQuery 就绪后绑定所有 data-nav 属性的元素
$(function () {
  // data-nav="page-key" 点击跳转
  $(document).on('click', '[data-nav]', function (e) {
    e.preventDefault();
    navigateTo($(this).data('nav'));
  });

  // 高亮当前页面对应的导航项
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  $('[data-nav-item]').each(function () {
    const target = ROUTES[$(this).data('nav-item')];
    if (target === currentFile) {
      $(this).addClass('nav-current');
    }
  });

  // ── AI 客服居中弹层（所有页面，除 index.html）──
  if (currentFile !== 'index.html') {
    // 注入样式
    $('head').append(`<style>
      @keyframes aiChatIn{from{transform:scale(.9) translateY(20px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}
      #ai-chat-overlay{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:rgba(15,23,42,.5);backdrop-filter:blur(4px);}
      #ai-chat-modal{width:440px;max-width:calc(100vw - 32px);height:600px;max-height:calc(100vh - 48px);border-radius:20px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 24px 64px rgba(0,0,0,.28);animation:aiChatIn .3s cubic-bezier(.34,1.56,.64,1);}
      .ai-chat-hd{background:linear-gradient(135deg,#0f4c81,#1a6bb5);padding:14px 16px;flex-shrink:0;}
      .ai-chat-bd{flex:1;overflow-y:auto;background:#f1f5f9;padding:14px;scroll-behavior:smooth;}
      .ai-chat-chips{background:#fff;border-top:1px solid #f1f5f9;padding:8px 10px;display:flex;gap:6px;overflow-x:auto;flex-shrink:0;}
      .ai-chat-chips::-webkit-scrollbar{display:none;}
      .ai-chat-ft{background:#fff;border-top:1px solid #f1f5f9;padding:10px 12px;display:flex;gap:8px;align-items:flex-end;flex-shrink:0;}
      .ai-bbl-ai{background:#fff;border:1px solid #e2e8f0;border-radius:4px 14px 14px 14px;padding:9px 13px;font-size:13px;color:#374151;line-height:1.65;max-width:88%;}
      .ai-bbl-user{background:#0f4c81;color:#fff;border-radius:14px 4px 14px 14px;padding:9px 13px;font-size:13px;line-height:1.65;max-width:88%;}
      .ai-tdot{width:6px;height:6px;border-radius:50%;background:#94a3b8;animation:aiTd 1.2s infinite;display:inline-block;}
      .ai-tdot:nth-child(2){animation-delay:.2s;}.ai-tdot:nth-child(3){animation-delay:.4s;}
      @keyframes aiTd{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-5px)}}
      .ai-chip{border:1px solid #cbd5e1;border-radius:20px;padding:5px 11px;font-size:11px;color:#475569;cursor:pointer;white-space:nowrap;background:#fff;transition:all .15s;flex-shrink:0;font-family:inherit;}
      .ai-chip:hover{border-color:#0f4c81;color:#0f4c81;background:#eff6ff;}
      @keyframes fabPulse{0%,100%{box-shadow:0 4px 20px rgba(15,76,129,.5),0 0 0 0 rgba(15,76,129,.35)}70%{box-shadow:0 4px 20px rgba(15,76,129,.5),0 0 0 10px rgba(15,76,129,0)}}
      @keyframes fabBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      @keyframes fabLabelIn{from{opacity:0;transform:translateX(8px)}to{opacity:1;transform:translateX(0)}}
      #ai-fab-wrap{position:fixed;bottom:24px;right:24px;z-index:9998;display:flex;align-items:center;gap:10px;flex-direction:row-reverse;}
      #ai-fab{width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,#0f4c81,#1a6bb5);border:none;cursor:pointer;box-shadow:0 4px 20px rgba(15,76,129,.5);display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;animation:fabPulse 2.4s ease-in-out infinite,fabBounce 3s ease-in-out infinite;flex-shrink:0;}
      #ai-fab:hover{transform:scale(1.12)!important;animation:none;box-shadow:0 8px 32px rgba(15,76,129,.65);}
      #ai-fab-label{background:linear-gradient(135deg,#0f4c81,#1a6bb5);color:#fff;font-size:12px;font-weight:600;padding:7px 13px;border-radius:20px;white-space:nowrap;box-shadow:0 4px 16px rgba(15,76,129,.35);animation:fabLabelIn .4s ease both;pointer-events:none;font-family:inherit;}
      #ai-fab-label::after{content:'';position:absolute;right:-6px;top:50%;transform:translateY(-50%);border:6px solid transparent;border-left-color:#1a6bb5;border-right:none;}
      #ai-fab-label{position:relative;}
    </style>`);

    // FAB — 带标签的吸引人版本
    $('body').append(`
      <div id="ai-fab-wrap">
        <button id="ai-fab" title="AI 智能客服">
          <i class="fas fa-robot" style="color:#fff;font-size:20px;"></i>
        </button>
        <div id="ai-fab-label">✨ AI 智能客服</div>
      </div>`);

    // 3秒后隐藏标签，保留 FAB
    setTimeout(() => $('#ai-fab-label').fadeOut(400), 4000);

    // ── 知识库 ──
    const AI_KB = {
      '借阅':'每位持有效借书证的会员可同时借阅最多 <strong>8本</strong> 电子书，每本借阅期 <strong>21天</strong>，可续借1次。<br><br>操作步骤：<br>① 搜索页找到书籍 → 点击封面<br>② 书籍详情页点击「立即借阅」<br>③ 借阅成功后可在「我的书架」查看',
      '额度':'您的借阅额度为 <strong>8本/次</strong>，当前已借 3 本，剩余 5 本。可在「我的书架」实时查看。',
      '续借':'续借步骤：<br>① 进入「我的书架 → 借阅中」<br>② 找到书籍，点击「续借」按钮<br>③ 借阅期自动延长 <strong>21天</strong><br><br>⚠️ 每本书最多续借 <strong>1次</strong>，请在到期前操作。',
      '推送':'推送至 Kindle 步骤：<br>① 「设备管理」页绑定 Kindle 邮箱<br>② 书籍详情页点击「推送至设备」<br>③ 选择 Kindle，点击「开始推送」<br><br>如推送失败，请将 <strong>nlb@ereads.sg</strong> 加入 Kindle 信任发件人。',
      'kindle':'推送至 Kindle 步骤：<br>① 「设备管理」页绑定 Kindle 邮箱<br>② 书籍详情页点击「推送至设备」<br>③ 选择 Kindle，点击「开始推送」',
      '借书证':'忘记借书证号，可通过以下方式找回：<br>① 登录 NLB Mobile App 查看<br>② 拨打客服热线 <strong>6332 3255</strong><br>③ 携带身份证前往任意 NLB 图书馆柜台查询',
      '阅读器':'目前支持：<br>• <strong>Kindle</strong>（MOBI/AZW3）<br>• <strong>Kobo</strong>（EPUB）<br>• <strong>文石 BOOX</strong>（EPUB/PDF）<br>• <strong>掌阅 iReader</strong>（EPUB/TXT）<br><br>在「设备管理」最多可绑定 <strong>3台</strong> 设备。',
      '下载':'借阅成功后，在书籍详情页选择 EPUB 或 PDF 格式下载。已下载书籍可在「我的书架 → 离线下载」中管理，最多可存储 <strong>5GB</strong>。',
      '逾期':'NLB 电子书借阅期满后系统将<strong>自动归还</strong>，不产生逾期罚款。建议开启到期提醒通知。',
      '罚款':'NLB 电子书借阅期满后系统将<strong>自动归还</strong>，不产生逾期罚款。',
      '注册':'办理借书证：携带 NRIC/FIN/护照前往任意 NLB 图书馆，即时免费办理。',
      '免费':'是的，完全免费！持有效新加坡图书馆借书证即可免费借阅平台所有 50,000+ 本正版电子书。',
      '语言':'平台支持 <strong>4种语言</strong>：中文、English、Malay、Tamil，共收录 50,000+ 正版电子书。',
    };
    const AI_DEFAULT = '感谢您的提问！您可以拨打客服热线 <strong>6332 3255</strong>（每日 10:00–21:00）或发送邮件至 <strong>enquiry@nlb.gov.sg</strong> 获得进一步帮助。还有其他问题吗？';

    function aiAnswer(q) {
      const t = q.toLowerCase();
      for (const [k,v] of Object.entries(AI_KB)) { if (t.includes(k.toLowerCase())) return v; }
      return AI_DEFAULT;
    }
    function aiTime() {
      const d = new Date();
      return d.getHours().toString().padStart(2,'0')+':'+d.getMinutes().toString().padStart(2,'0');
    }
    function aiRobotIcon() {
      return `<div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#0f4c81,#1a6bb5);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;"><i class="fas fa-robot" style="color:#fff;font-size:10px;"></i></div>`;
    }
    function aiUserIcon() {
      return `<div style="width:26px;height:26px;border-radius:50%;background:#0f4c81;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;"><span style="color:#fff;font-size:9px;font-weight:700;">陈</span></div>`;
    }
    function aiScroll() { const el=$('#ai-msg-bd')[0]; if(el) el.scrollTop=el.scrollHeight; }
    function aiAddUser(text) {
      $('#ai-msg-list').append(`<div style="display:flex;align-items:flex-start;gap:8px;justify-content:flex-end;"><div><div class="ai-bbl-user">${text}</div><p style="font-size:10px;color:#94a3b8;margin:3px 4px 0 0;text-align:right;">${aiTime()}</p></div>${aiUserIcon()}</div>`);
      aiScroll();
    }
    function aiAddTyping() {
      $('#ai-msg-list').append(`<div style="display:flex;align-items:flex-start;gap:8px;" id="ai-typing">${aiRobotIcon()}<div class="ai-bbl-ai" style="display:flex;align-items:center;gap:5px;padding:11px 13px;"><div class="ai-tdot"></div><div class="ai-tdot"></div><div class="ai-tdot"></div></div></div>`);
      aiScroll();
    }
    function aiAddReply(html) {
      $('#ai-typing').remove();
      $('#ai-msg-list').append(`<div style="display:flex;align-items:flex-start;gap:8px;">${aiRobotIcon()}<div><div class="ai-bbl-ai">${html}</div><p style="font-size:10px;color:#94a3b8;margin:3px 0 0 4px;">${aiTime()}</p></div></div>`);
      aiScroll();
    }
    function aiSend(text) {
      text = text.trim(); if (!text) return;
      $('#ai-chat-input').val('').css('height','');
      aiAddUser(text); aiAddTyping();
      setTimeout(() => aiAddReply(aiAnswer(text)), 800 + Math.random()*500);
    }

    function openAIChat() {
      if ($('#ai-chat-overlay').length) return;
      const $ov = $(`<div id="ai-chat-overlay">
        <div id="ai-chat-modal">
          <div class="ai-chat-hd">
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="fas fa-robot" style="color:#fff;font-size:15px;"></i>
              </div>
              <div style="flex:1;">
                <p style="color:#fff;font-weight:600;font-size:14px;margin:0;">NLB 智能客服</p>
                <p style="color:rgba(255,255,255,.75);font-size:11px;margin:2px 0 0;display:flex;align-items:center;gap:4px;">
                  <span style="width:6px;height:6px;background:#4ade80;border-radius:50%;display:inline-block;"></span>在线 · 通常即时回复
                </p>
              </div>
              <button id="ai-chat-close" style="background:none;border:none;cursor:pointer;color:rgba(255,255,255,.8);width:28px;height:28px;border-radius:8px;font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;">×</button>
            </div>
          </div>
          <div class="ai-chat-bd" id="ai-msg-bd">
            <div id="ai-msg-list" style="display:flex;flex-direction:column;gap:14px;">
              <div style="display:flex;align-items:flex-start;gap:8px;">
                <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#0f4c81,#1a6bb5);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px;"><i class="fas fa-robot" style="color:#fff;font-size:10px;"></i></div>
                <div>
                  <div class="ai-bbl-ai">您好！我是 NLB eReads 智能客服 📚<br><br>我可以帮您解答借阅、续借、推送、账号等各类问题，请问有什么可以帮到您？</div>
                  <p style="font-size:10px;color:#94a3b8;margin:3px 0 0 4px;">刚刚</p>
                </div>
              </div>
            </div>
          </div>
          <div class="ai-chat-chips">
            <button class="ai-chip" data-aiq="如何借阅电子书？">如何借阅？</button>
            <button class="ai-chip" data-aiq="如何续借书籍？">如何续借？</button>
            <button class="ai-chip" data-aiq="如何推送到Kindle？">推送Kindle</button>
            <button class="ai-chip" data-aiq="借阅额度是多少？">借阅额度</button>
            <button class="ai-chip" data-aiq="忘记借书证号怎么办？">忘记证号</button>
            <button class="ai-chip" data-aiq="支持哪些阅读器？">支持设备</button>
            <button class="ai-chip" data-aiq="逾期会有罚款吗？">逾期政策</button>
          </div>
          <div class="ai-chat-ft">
            <textarea id="ai-chat-input" rows="1"
              style="flex:1;resize:none;border:1px solid #e2e8f0;border-radius:14px;padding:8px 12px;font-size:13px;font-family:inherit;outline:none;transition:border-color .15s;max-height:90px;"
              placeholder="输入您的问题..."
              onfocus="this.style.borderColor='#0f4c81'"
              onblur="this.style.borderColor='#e2e8f0'"></textarea>
            <button id="ai-send-btn" style="width:36px;height:36px;border-radius:50%;background:#0f4c81;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <i class="fas fa-paper-plane" style="color:#fff;font-size:12px;"></i>
            </button>
          </div>
        </div>
      </div>`);
      $('body').append($ov);

      $('#ai-chat-close').on('click', () => $ov.remove());
      $ov.on('click', e => { if ($(e.target).is('#ai-chat-overlay')) $ov.remove(); });
      $('#ai-send-btn').on('click', () => aiSend($('#ai-chat-input').val()));
      $('#ai-chat-input').on('keydown', function(e) {
        if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); aiSend($(this).val()); }
      }).on('input', function() {
        this.style.height='auto';
        this.style.height=Math.min(this.scrollHeight,90)+'px';
      });
      $ov.on('click', '.ai-chip', function() { aiSend($(this).data('aiq')); });
    }

    $('#ai-fab').on('click', openAIChat);
  }
});
