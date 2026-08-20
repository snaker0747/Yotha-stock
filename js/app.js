/**
 * Application Logic & PIN Security Authentication - Mobile & Tablet Optimized
 * ศูนย์รวมระบบงาน ฝ่ายสาธารณูปโภค ส่วนการโยธา สำนักช่าง เทศบาลนครระยอง
 */

// Secret PIN Code
const CORRECT_PIN = "888888";
const AUTH_STORAGE_KEY = "rayong_portal_auth_session";

document.addEventListener('DOMContentLoaded', () => {
  // State management
  let activeCategory = 'all';
  let searchQuery = '';
  let pinnedIds = JSON.parse(localStorage.getItem('rayong_pinned_systems') || '[]');
  let currentPin = '';
  let isAuthenticating = false;

  // DOM Elements
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const categoryFilters = document.getElementById('category-filters');
  const systemsGrid = document.getElementById('systems-grid');
  const systemCountBadge = document.getElementById('system-count-badge');
  const emptyState = document.getElementById('empty-state');

  // PIN Login Elements
  const pinOverlay = document.getElementById('pin-overlay');
  const pinBoxesContainer = document.getElementById('pin-boxes');
  const pinBoxes = document.querySelectorAll('.pin-digit-box');
  const pinErrorMessage = document.getElementById('pin-error-message');
  const keypadButtons = document.querySelectorAll('.keypad-btn');
  const logoutBtn = document.getElementById('logout-btn');

  // Initialize
  initApp();

  function initApp() {
    checkAuthStatus();
    renderCategories();
    renderSystems();
    setupEventListeners();
    setupPinSecurity();
    updateLiveTime();
  }

  // =========================================================================
  // PIN Code Security Logic (PIN: 888888)
  // =========================================================================
  function checkAuthStatus() {
    const isAuthenticated = sessionStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    if (isAuthenticated) {
      hidePinOverlay(false);
    } else {
      showPinOverlay();
    }
  }

  function showPinOverlay() {
    if (!pinOverlay) return;
    currentPin = '';
    updatePinDisplay();
    pinOverlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    if (pinErrorMessage) pinErrorMessage.classList.add('hidden');
  }

  function hidePinOverlay(animated = true) {
    if (!pinOverlay) return;
    if (animated) {
      pinOverlay.classList.add('animate-unlock');
      setTimeout(() => {
        pinOverlay.classList.add('hidden');
        pinOverlay.classList.remove('animate-unlock');
        document.body.classList.remove('overflow-hidden');
      }, 350);
    } else {
      pinOverlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }

  function setupPinSecurity() {
    // Keypad Click Event
    keypadButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const digit = btn.getAttribute('data-digit');
        const action = btn.getAttribute('data-action');

        if (action === 'delete') {
          handlePinDelete();
        } else if (action === 'clear') {
          handlePinClear();
        } else if (digit !== null) {
          handlePinInput(digit);
        }
      });
    });

    // Hardware Keyboard Input
    window.addEventListener('keydown', (e) => {
      // Only process when PIN overlay is visible
      if (pinOverlay && !pinOverlay.classList.contains('hidden')) {
        if (e.key >= '0' && e.key <= '9') {
          e.preventDefault();
          handlePinInput(e.key);
        } else if (e.key === 'Backspace') {
          e.preventDefault();
          handlePinDelete();
        } else if (e.key === 'Escape') {
          e.preventDefault();
          handlePinClear();
        }
      }
    });

    // Logout / Lock Button
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem(AUTH_STORAGE_KEY);
        showToast('🔒 ล็อกระบบเรียบร้อยแล้ว');
        showPinOverlay();
      });
    }
  }

  function handlePinInput(digit) {
    if (isAuthenticating || currentPin.length >= 6) return;
    currentPin += digit;
    updatePinDisplay();

    if (currentPin.length === 6) {
      verifyPin();
    }
  }

  function handlePinDelete() {
    if (isAuthenticating || currentPin.length === 0) return;
    currentPin = currentPin.slice(0, -1);
    updatePinDisplay();
    if (pinErrorMessage) pinErrorMessage.classList.add('hidden');
  }

  function handlePinClear() {
    if (isAuthenticating) return;
    currentPin = '';
    updatePinDisplay();
    if (pinErrorMessage) pinErrorMessage.classList.add('hidden');
  }

  function updatePinDisplay() {
    pinBoxes.forEach((box, index) => {
      if (index < currentPin.length) {
        box.classList.add('filled');
        box.innerHTML = `<span>●</span>`;
      } else {
        box.classList.remove('filled');
        box.innerHTML = '';
      }

      if (index === currentPin.length) {
        box.classList.add('active-focus');
      } else {
        box.classList.remove('active-focus');
      }
    });
  }

  function verifyPin() {
    isAuthenticating = true;

    if (currentPin === CORRECT_PIN) {
      // Success!
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
      if (pinErrorMessage) pinErrorMessage.classList.add('hidden');
      
      // Visual feedback
      pinBoxes.forEach(box => {
        box.classList.add('bg-[#B9FF66]');
      });

      setTimeout(() => {
        hidePinOverlay(true);
        showToast('✅ ปลดล็อกระบบสำเร็จ ยินดีต้อนรับ');
        isAuthenticating = false;
      }, 250);

    } else {
      // Failed PIN
      setTimeout(() => {
        if (pinErrorMessage) {
          pinErrorMessage.classList.remove('hidden');
        }
        if (pinBoxesContainer) {
          pinBoxesContainer.classList.add('animate-shake');
          setTimeout(() => {
            pinBoxesContainer.classList.remove('animate-shake');
          }, 500);
        }
        currentPin = '';
        updatePinDisplay();
        isAuthenticating = false;
      }, 200);
    }
  }

  // =========================================================================
  // Standard App Event Listeners & Search
  // =========================================================================
  function setupEventListeners() {
    // Search input
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        if (searchQuery.length > 0) {
          clearSearchBtn.classList.remove('hidden');
        } else {
          clearSearchBtn.classList.add('hidden');
        }
        renderSystems();
      });
    }

    // Clear search
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        searchInput.focus();
        renderSystems();
      });
    }

    // Help Modal
    const helpModalBtn = document.getElementById('help-modal-btn');
    const helpModal = document.getElementById('help-modal');
    const closeHelpModal = document.getElementById('close-help-modal');

    if (helpModalBtn && helpModal) {
      helpModalBtn.addEventListener('click', () => helpModal.classList.remove('hidden'));
      if (closeHelpModal) closeHelpModal.addEventListener('click', () => helpModal.classList.add('hidden'));
      helpModal.addEventListener('click', (e) => {
        if (e.target === helpModal) helpModal.classList.add('hidden');
      });
    }

    // Keyboard shortcut (Escape to close modal, / to search)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (helpModal) helpModal.classList.add('hidden');
      }
      if (e.key === '/' && document.activeElement !== searchInput && (!pinOverlay || pinOverlay.classList.contains('hidden'))) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  // Render Category Filter Tabs
  function renderCategories() {
    if (!categoryFilters) return;
    
    categoryFilters.innerHTML = categories.map(cat => `
      <button 
        type="button" 
        class="filter-tab ${cat.id === activeCategory ? 'active' : ''}" 
        data-category="${cat.id}">
        ${cat.name}
      </button>
    `).join('');

    // Attach click events
    categoryFilters.querySelectorAll('.filter-tab').forEach(button => {
      button.addEventListener('click', () => {
        categoryFilters.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        activeCategory = button.getAttribute('data-category');
        renderSystems();
      });
    });
  }

  // Toggle Pinned / Favorite System
  window.togglePin = function(id, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (pinnedIds.includes(id)) {
      pinnedIds = pinnedIds.filter(item => item !== id);
      showToast('ยกเลิกการปักหมุดแล้ว');
    } else {
      pinnedIds.push(id);
      showToast('⭐ ปักหมุดระบบงานโปรดไว้บนสุดแล้ว');
    }
    localStorage.setItem('rayong_pinned_systems', JSON.stringify(pinnedIds));
    renderSystems();
  };

  // Copy Link Helper
  window.copySystemLink = function(url, title, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    navigator.clipboard.writeText(url).then(() => {
      showToast(`คัดลอกลิงก์ "${title}" แล้ว`);
    });
  };

  // Open System Link Handler
  window.openSystem = function(url, event) {
    if (event.target.closest('button') || event.target.closest('a')) {
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Render System Cards
  function renderSystems() {
    if (!systemsGrid) return;

    // Filter systems
    let filtered = systemsData.filter(system => {
      const matchesCategory = (activeCategory === 'all') || (system.category === activeCategory);
      const matchesSearch = (
        searchQuery === '' ||
        system.title.toLowerCase().includes(searchQuery) ||
        system.description.toLowerCase().includes(searchQuery) ||
        system.category.toLowerCase().includes(searchQuery) ||
        system.department.toLowerCase().includes(searchQuery) ||
        (system.tag && system.tag.toLowerCase().includes(searchQuery))
      );

      return matchesCategory && matchesSearch;
    });

    // Sort: Pinned first
    filtered.sort((a, b) => {
      const aPinned = pinnedIds.includes(a.id);
      const bPinned = pinnedIds.includes(b.id);
      if (aPinned && !bPinned) return -1;
      if (!aPinned && bPinned) return 1;
      return 0;
    });

    // Update count badge
    if (systemCountBadge) {
      systemCountBadge.textContent = `${filtered.length} ระบบงาน`;
    }

    // Handle Empty State
    if (filtered.length === 0) {
      systemsGrid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    } else {
      if (emptyState) emptyState.classList.add('hidden');
    }

    // Render HTML Cards
    systemsGrid.innerHTML = filtered.map(system => {
      const isPinned = pinnedIds.includes(system.id);
      const illustrationSvg = illustrations[system.illustrationType] ? 
        illustrations[system.illustrationType](system.cardTheme) : 
        illustrations.project(system.cardTheme);

      // Format badges
      const badgeHtml = Array.isArray(system.badgeTitle) ? 
        system.badgeTitle.map(text => `<span class="badge-title px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-base sm:text-lg md:text-xl font-bold tracking-tight inline-block mb-1 sm:mb-1.5 shadow-xs">${text}</span>`).join(' ') :
        `<span class="badge-title px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-base sm:text-lg md:text-xl font-bold tracking-tight inline-block shadow-xs">${system.title}</span>`;

      return `
        <div 
          onclick="openSystem('${system.url}', event)" 
          class="group relative flex flex-col justify-between p-5 sm:p-7 md:p-8 lg:p-9 neo-box card-theme-${system.cardTheme} cursor-pointer transition-all duration-300">
          
          <!-- Top Utility Bar (Pin & Tag) -->
          <div class="flex items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 z-10">
            <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span class="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md ${system.cardTheme === 'dark' ? 'bg-[#2A2B36] text-gray-200 border border-gray-700' : 'bg-white/95 text-gray-800 border border-black/10 shadow-xs'}">
                ${system.category}
              </span>
              <span class="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-medium ${system.cardTheme === 'dark' ? 'text-emerald-400' : 'text-emerald-800 font-semibold'}">
                <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ออนไลน์
              </span>
            </div>

            <!-- Quick Action Icons -->
            <div class="flex items-center gap-1">
              <button 
                type="button" 
                onclick="copySystemLink('${system.url}', '${system.title}', event)"
                title="คัดลอกลิงก์"
                class="p-1.5 rounded-lg text-xs transition-colors ${system.cardTheme === 'dark' ? 'text-gray-400 hover:text-white hover:bg-white/10 active:bg-white/20' : 'text-gray-500 hover:text-black hover:bg-black/10 active:bg-black/20'}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
              </button>

              <button 
                type="button" 
                onclick="togglePin('${system.id}', event)" 
                title="${isPinned ? 'ยกเลิกการปักหมุด' : 'ปักหมุดระบบงานนี้'}"
                class="p-1.5 rounded-lg text-base leading-none transition-transform active:scale-75 ${isPinned ? 'text-amber-400 font-bold scale-110' : (system.cardTheme === 'dark' ? 'text-gray-400 hover:text-amber-300' : 'text-gray-400 hover:text-amber-500')}">
                ${isPinned ? '★' : '☆'}
              </button>
            </div>
          </div>

          <!-- Main Card Content Grid (Text Left + Illustration Right) -->
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-center flex-1 my-1 sm:my-2">
            
            <!-- Left Info Column -->
            <div class="sm:col-span-7 flex flex-col justify-center order-2 sm:order-1">
              <div class="mb-2 sm:mb-3">
                ${badgeHtml}
              </div>
              <p class="text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 mb-3 sm:mb-4 ${system.cardTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}">
                ${system.description}
              </p>
              <div class="text-[11px] sm:text-xs ${system.cardTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'} font-medium">
                🏛️ ${system.department}
              </div>
            </div>

            <!-- Right Illustration Column -->
            <div class="sm:col-span-5 flex items-center justify-center p-1 sm:p-2 order-1 sm:order-2 max-w-[150px] sm:max-w-[180px] md:max-w-[210px] mx-auto w-full">
              ${illustrationSvg}
            </div>

          </div>

          <!-- Bottom Action Bar -->
          <div class="pt-4 sm:pt-5 mt-2 border-t ${system.cardTheme === 'dark' ? 'border-gray-800' : 'border-black/10'} flex items-center justify-between">
            <a 
              href="${system.url}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 sm:gap-3 group-hover:gap-3.5 transition-all duration-200 py-1">
              
              <!-- Circular Action Button with 45-degree arrow -->
              <span class="btn-circle-action w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center border border-black shadow-xs transform group-hover:rotate-45 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 17L17 7M17 7H9M17 7V15"></path>
                </svg>
              </span>

              <span class="btn-action-text text-sm sm:text-base md:text-lg font-bold tracking-tight">
                เข้าใช้งานระบบ
              </span>
            </a>

            <span class="text-[11px] sm:text-xs opacity-60 hidden sm:inline-block ${system.cardTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}">
              เปิดแท็บใหม่ ↗
            </span>
          </div>

        </div>
      `;
    }).join('');
  }

  // Toast Notification
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 bg-[#191A23] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border-2 border-[#B9FF66] shadow-2xl flex items-center gap-2.5 sm:gap-3 transform transition-all duration-300 translate-y-20 opacity-0 max-w-[90vw]';
      document.body.appendChild(toast);
    }
    
    toast.innerHTML = `
      <span class="w-2 h-2 rounded-full bg-[#B9FF66] flex-shrink-0"></span>
      <span class="text-xs sm:text-sm font-medium leading-tight">${message}</span>
    `;

    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 2800);
  }

  // Live Time in Footer/Header
  function updateLiveTime() {
    const timeEl = document.getElementById('live-time');
    if (!timeEl) return;

    const update = () => {
      const now = new Date();
      const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      timeEl.textContent = now.toLocaleDateString('th-TH', options);
    };

    update();
    setInterval(update, 1000);
  }
});
