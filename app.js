// Initial Mock Data
const defaultProjects = [
    { id: 1, contractNo: "1/2569", name: "โครงการ A", procurement: "เฉพาะเจาะจง", engineer: "พง, บุญดี, ศรีชัย", committee: "ศรีจัน, แสง, พัชรา", budget: "80,000", budgetRaw: 80000, status: "จัดทำแผน", progress: 30, notes: "" },
    { id: 2, contractNo: "2/2569", name: "โครงการ B", procurement: "E-Bidding", engineer: "คุณา, ศรีชัย", committee: "ศรีจัน, ภัทรา, พัชนะ", budget: "9,860,000", budgetRaw: 9860000, status: "จัดทำเอกสาร E-bidding", progress: 98, notes: "รอเอกสารเพิ่มเติม" },
    { id: 3, contractNo: "3/2569", name: "โครงการ C", procurement: "E-Bidding", engineer: "ศรีชัย, อุดม", committee: "เลิศม, พัชรา, สมชัย", budget: "8,930,000", budgetRaw: 8930000, status: "ประกาศผู้ชนะ", progress: 26, notes: "" },
    { id: 4, contractNo: "4/2569", name: "โครงการ D", procurement: "เฉพาะเจาะจง", engineer: "พง, วันชนะ", committee: "ภัทรา, แสง, สมชัย, อัครชัย", budget: "450,000", budgetRaw: 450000, status: "ทำ/ลงนามสัญญา", progress: 40, notes: "" },
    { id: 5, contractNo: "5/2569", name: "โครงการ E", procurement: "E-Bidding", engineer: "สมหมาย, ศรีชัย, สมดี", committee: "เลิศม, พัชรา, อัครชัย", budget: "9,030,000", budgetRaw: 9030000, status: "จัดทำรายงานขอซื้อ/จ้าง", progress: 30, notes: "" },
    { id: 6, contractNo: "6/2569", name: "โครงการ F", procurement: "E-Bidding", engineer: "คุณา, พง", committee: "เลิศม, พัชรา, สมชัย", budget: "54,640,000", budgetRaw: 54640000, status: "ดำเนินงานโครงการ", progress: 78, notes: "" },
    { id: 7, contractNo: "7/2569", name: "โครงการ G", procurement: "เฉพาะเจาะจง", engineer: "เลอพง, บุญดี", committee: "เลิศม, ศรีจัน, รัตนพงศ์", budget: "200,000", budgetRaw: 200000, status: "ดำเนินงานโครงการ", progress: 50, notes: "พบปัญหาหน้างาน แจ้งปรับแก้" },
    { id: 8, contractNo: "8/2569", name: "โครงการ H", procurement: "E-Bidding", engineer: "วันชัย, สมดี, สมหมาย", committee: "พัชรา, สมชัย, สมหมาย", budget: "7,000,000", budgetRaw: 7000000, status: "ดำเนินงานโครงการ", progress: 68, notes: "" },
    { id: 9, contractNo: "9/2569", name: "โครงการ I", procurement: "E-Bidding", engineer: "อุดม, สมดี", committee: "ศรีจัน, อัครชัย, พัชนะ", budget: "1,200,000", budgetRaw: 1200000, status: "ทำ/ลงนามสัญญา", progress: 46, notes: "" },
    { id: 10, contractNo: "10/2569", name: "โครงการ J", procurement: "E-Bidding", engineer: "วันชนะ, เลอพง", committee: "รัตนพงศ์, ภัทรา, อัครชัย", budget: "3,940,000", budgetRaw: 3940000, status: "ดำเนินงานโครงการ", progress: 80, notes: "" },
    { id: 11, contractNo: "11/2569", name: "โครงการ K", procurement: "E-Bidding", engineer: "ศรีพง, คุณา", committee: "รัตนพงศ์, พัชรา, สมปอง", budget: "37,800,000", budgetRaw: 37800000, status: "ประกาศผู้ชนะ", progress: 35, notes: "" }
];

// App State
let projects = JSON.parse(localStorage.getItem('pw_projects')) || defaultProjects;
let currentUser = { role: null, name: null };
let currentFilters = { search: '', procurement: '', status: '' };
let statusChart = null;
let budgetChart = null;

// DOM Elements
const loginView = document.getElementById('login-view');
const dashboardView = document.getElementById('dashboard-view');
const roleSelect = document.getElementById('role-select');
const engineerSelectGroup = document.getElementById('engineer-select-group');
const engineerNameSelect = document.getElementById('engineer-name');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userInfo = document.getElementById('user-info');
const tbody = document.getElementById('projects-tbody');
const summaryCards = document.getElementById('summary-cards');
const statusTabs = document.getElementById('status-tabs');
const searchInput = document.getElementById('search-input');
const procurementFilter = document.getElementById('procurement-filter');
const statusFilter = document.getElementById('status-filter');
const actionCol = document.getElementById('action-col');

// Modal Elements
const editModal = document.getElementById('edit-modal');
const closeModalBtn = document.getElementById('close-modal');
const cancelEditBtn = document.getElementById('cancel-edit');
const editForm = document.getElementById('edit-form');

// Initialize
function init() {
    // Extract unique engineers for dropdown
    const allEngineers = new Set();
    projects.forEach(p => {
        p.engineer.split(',').forEach(e => allEngineers.add(e.trim()));
    });
    const sortedEngineers = Array.from(allEngineers).sort();
    
    engineerNameSelect.innerHTML = '';
    sortedEngineers.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        engineerNameSelect.appendChild(option);
    });

    // Check if already logged in
    const savedUser = localStorage.getItem('pw_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard();
    }
}

// Event Listeners
roleSelect.addEventListener('change', (e) => {
    if (e.target.value === 'engineer') {
        engineerSelectGroup.style.display = 'block';
    } else {
        engineerSelectGroup.style.display = 'none';
    }
});

loginBtn.addEventListener('click', () => {
    const role = roleSelect.value;
    const name = role === 'engineer' ? engineerNameSelect.value : 'ผู้บริหาร';
    
    currentUser = { role, name };
    localStorage.setItem('pw_user', JSON.stringify(currentUser));
    showDashboard();
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('pw_user');
    currentUser = { role: null, name: null };
    loginView.classList.add('active');
    dashboardView.classList.remove('active');
});

// Search & Filter Events
searchInput.addEventListener('input', (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    renderTable();
});

procurementFilter.addEventListener('change', (e) => {
    currentFilters.procurement = e.target.value;
    renderTable();
});

statusFilter.addEventListener('change', (e) => {
    currentFilters.status = e.target.value;
    renderTable();
    updateTabsUI();
});

// Modal Events
closeModalBtn.addEventListener('click', closeModal);
cancelEditBtn.addEventListener('click', closeModal);
editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveProjectEdit();
});

function showDashboard() {
    loginView.classList.remove('active');
    dashboardView.classList.add('active');
    
    if (currentUser.role === 'executive') {
        userInfo.textContent = 'ผู้บริหาร (Executive)';
        actionCol.style.display = 'none';
        document.getElementById('charts-section').style.display = 'grid';
    } else {
        userInfo.textContent = `ช่าง: ${currentUser.name}`;
        actionCol.style.display = 'table-cell';
        document.getElementById('charts-section').style.display = 'none';
    }
    
    renderDashboard();
}

function renderDashboard() {
    renderSummaryCards();
    renderStatusTabs();
    renderTable();
    if (currentUser.role === 'executive') {
        renderCharts();
    }
}

function renderSummaryCards() {
    const totalBudget = projects.reduce((sum, p) => sum + p.budgetRaw, 0) / 1000000;
    const operating = projects.filter(p => p.status === 'ดำเนินงานโครงการ').length;
    const notStarted = projects.filter(p => ['จัดทำแผน', 'จัดทำรายงานขอซื้อ/จ้าง', 'จัดทำเอกสาร E-bidding'].includes(p.status)).length;
    const hasNotes = projects.filter(p => p.notes && p.notes.trim() !== '').length;
    const specificCount = projects.filter(p => p.procurement === 'เฉพาะเจาะจง').length;

    summaryCards.innerHTML = `
        <div class="stat-card">
            <div class="stat-title">โครงการทั้งหมด</div>
            <div class="stat-value text-blue">${projects.length} <span>สัญญา</span></div>
        </div>
        <div class="stat-card highlight">
            <div class="stat-title">งบประมาณรวม</div>
            <div class="stat-value">${totalBudget.toFixed(2)} <span>ล้านบาท</span></div>
        </div>
        <div class="stat-card">
            <div class="stat-title">ดำเนินงานแล้ว</div>
            <div class="stat-value text-success">${operating} <span>โครงการ</span></div>
        </div>
        <div class="stat-card">
            <div class="stat-title">ยังไม่เริ่มดำเนินงาน</div>
            <div class="stat-value">${notStarted} <span>โครงการ</span></div>
        </div>
        <div class="stat-card">
            <div class="stat-title">มีหมายเหตุแจ้งเตือน</div>
            <div class="stat-value ${hasNotes > 0 ? 'text-danger' : ''}">${hasNotes} <span>โครงการ</span></div>
        </div>
    `;
}

function renderStatusTabs() {
    const statuses = [
        "จัดทำแผน", 
        "จัดทำรายงานขอซื้อ/จ้าง", 
        "จัดทำเอกสาร E-bidding", 
        "ประกาศผู้ชนะ", 
        "ทำ/ลงนามสัญญา", 
        "ดำเนินงานโครงการ", 
        "ตรวจรับงาน"
    ];
    
    let tabsHtml = `<button class="tab-btn ${currentFilters.status === '' ? 'active' : ''}" data-status="">
        ทั้งหมด <span class="badge">${projects.length}</span>
    </button>`;
    
    statuses.forEach(status => {
        const count = projects.filter(p => p.status === status).length;
        tabsHtml += `<button class="tab-btn ${currentFilters.status === status ? 'active' : ''}" data-status="${status}">
            ${status} <span class="badge">${count}</span>
        </button>`;
    });
    
    statusTabs.innerHTML = tabsHtml;
    
    // Add click events
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentFilters.status = e.currentTarget.dataset.status;
            statusFilter.value = currentFilters.status;
            renderTable();
            updateTabsUI();
        });
    });
}

function updateTabsUI() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.status === currentFilters.status) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function getStatusColor(status) {
    if (status.includes("แผน")) return "status-plan";
    if (status.includes("รายงาน")) return "status-report";
    if (status.includes("E-bidding")) return "status-ebidding";
    if (status.includes("ผู้ชนะ")) return "status-winner";
    if (status.includes("สัญญา")) return "status-contract";
    if (status.includes("ดำเนินงาน")) return "status-operate";
    if (status.includes("ตรวจรับ")) return "status-inspect";
    return "";
}

function getProgressColor(progress) {
    if (progress < 30) return "var(--accent-danger)";
    if (progress < 70) return "var(--accent-warning)";
    if (progress < 100) return "var(--accent-primary)";
    return "var(--accent-success)";
}

function formatBudget(amount) {
    if (amount >= 1000000) {
        return (amount / 1000000).toFixed(2) + " ล.";
    } else if (amount >= 1000) {
        return (amount / 1000).toFixed(0) + " พ.";
    }
    return amount;
}

function renderTable() {
    let filtered = projects.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(currentFilters.search) || 
                            p.contractNo.toLowerCase().includes(currentFilters.search) ||
                            p.engineer.toLowerCase().includes(currentFilters.search);
        const matchProcurement = currentFilters.procurement === '' || p.procurement === currentFilters.procurement;
        const matchStatus = currentFilters.status === '' || p.status === currentFilters.status;
        
        return matchSearch && matchProcurement && matchStatus;
    });

    tbody.innerHTML = '';
    
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="${currentUser.role === 'engineer' ? 9 : 8}" style="text-align:center; padding: 30px; color: var(--text-muted);">ไม่พบข้อมูลโครงการที่ค้นหา</td></tr>`;
        return;
    }

    filtered.forEach(p => {
        // Can edit if role is engineer AND engineer name matches (substring)
        const canEdit = currentUser.role === 'engineer' && p.engineer.includes(currentUser.name);
        
        const tr = document.createElement('tr');
        
        // Render Row
        let rowHtml = `
            <td class="project-cell">
                <div class="project-name">${p.name}</div>
                <div class="contract-no">${p.contractNo}</div>
            </td>
            <td><span class="badge-procurement">${p.procurement}</span></td>
            <td>${p.engineer.replace(/,/g, ', ')}</td>
            <td>${p.committee.replace(/,/g, ', ')}</td>
            <td>${formatBudget(p.budgetRaw)}</td>
            <td><span class="badge-status ${getStatusColor(p.status)}">${p.status}</span></td>
            <td>
                <div class="progress-cell">
                    <span class="progress-text">${p.progress}%</span>
                    <div class="progress-track">
                        <div class="progress-fill" style="width: ${p.progress}%; background-color: ${getProgressColor(p.progress)};"></div>
                    </div>
                </div>
            </td>
            <td class="notes-cell">${p.notes ? p.notes : '<span style="color:var(--text-muted)">-</span>'}</td>
        `;

        if (currentUser.role === 'engineer') {
            if (canEdit) {
                rowHtml += `<td>
                    <button class="btn btn-outline" onclick="openEditModal(${p.id})">
                        <i class="ri-edit-line"></i> อัปเดต
                    </button>
                </td>`;
            } else {
                rowHtml += `<td>
                    <span style="color: var(--text-muted); font-size: 0.85rem;">ไม่มีสิทธิ์</span>
                </td>`;
            }
        }

        tr.innerHTML = rowHtml;
        tbody.appendChild(tr);
    });
}

// Modal Functions
window.openEditModal = function(id) {
    const project = projects.find(p => p.id === id);
    if (!project) return;
    
    document.getElementById('edit-id').value = project.id;
    document.getElementById('edit-contractNo').value = project.contractNo;
    document.getElementById('edit-name').value = project.name;
    document.getElementById('edit-procurement').value = project.procurement;
    document.getElementById('edit-budget').value = project.budgetRaw;
    document.getElementById('edit-engineer').value = project.engineer;
    document.getElementById('edit-committee').value = project.committee;
    document.getElementById('edit-status').value = project.status;
    document.getElementById('edit-progress').value = project.progress;
    document.getElementById('edit-notes').value = project.notes;
    
    editModal.classList.add('active');
}

function closeModal() {
    editModal.classList.remove('active');
}

function saveProjectEdit() {
    const id = parseInt(document.getElementById('edit-id').value);
    
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects[index].contractNo = document.getElementById('edit-contractNo').value;
        projects[index].name = document.getElementById('edit-name').value;
        projects[index].procurement = document.getElementById('edit-procurement').value;
        projects[index].budgetRaw = parseInt(document.getElementById('edit-budget').value) || 0;
        projects[index].budget = formatBudget(projects[index].budgetRaw);
        projects[index].engineer = document.getElementById('edit-engineer').value;
        projects[index].committee = document.getElementById('edit-committee').value;
        projects[index].status = document.getElementById('edit-status').value;
        projects[index].progress = parseInt(document.getElementById('edit-progress').value) || 0;
        projects[index].notes = document.getElementById('edit-notes').value;
        
        // Save to local storage
        localStorage.setItem('pw_projects', JSON.stringify(projects));
        
        // Re-render
        renderDashboard();
        closeModal();
    }
}

// Chart Rendering
function renderCharts() {
    if (!window.Chart) return;
    
    // 1. Status Bar Chart
    const statusCounts = {};
    const statuses = ["จัดทำแผน", "จัดทำรายงานขอซื้อ/จ้าง", "จัดทำเอกสาร E-bidding", "ประกาศผู้ชนะ", "ทำ/ลงนามสัญญา", "ดำเนินงานโครงการ", "ตรวจรับงาน"];
    statuses.forEach(s => statusCounts[s] = 0);
    projects.forEach(p => {
        if (statusCounts[p.status] !== undefined) {
            statusCounts[p.status]++;
        }
    });

    const ctxStatus = document.getElementById('statusBarChart').getContext('2d');
    if (statusChart) statusChart.destroy();
    statusChart = new Chart(ctxStatus, {
        type: 'bar',
        data: {
            labels: statuses,
            datasets: [{
                label: 'จำนวนโครงการ',
                data: statuses.map(s => statusCounts[s]),
                backgroundColor: 'rgba(59, 130, 246, 0.7)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    ticks: { stepSize: 1, color: '#A0A0AB' },
                    grid: { color: '#2D2D35' }
                },
                x: {
                    ticks: { color: '#A0A0AB', font: { family: 'Kanit' } },
                    grid: { display: false }
                }
            }
        }
    });

    // 2. Budget Doughnut Chart
    let eBiddingBudget = 0;
    let specificBudget = 0;
    projects.forEach(p => {
        if (p.procurement === 'E-Bidding') eBiddingBudget += p.budgetRaw;
        if (p.procurement === 'เฉพาะเจาะจง') specificBudget += p.budgetRaw;
    });

    const ctxBudget = document.getElementById('budgetDoughnutChart').getContext('2d');
    if (budgetChart) budgetChart.destroy();
    budgetChart = new Chart(ctxBudget, {
        type: 'doughnut',
        data: {
            labels: ['E-Bidding', 'เฉพาะเจาะจง'],
            datasets: [{
                data: [eBiddingBudget, specificBudget],
                backgroundColor: ['rgba(139, 92, 246, 0.8)', 'rgba(16, 185, 129, 0.8)'],
                borderColor: '#1C1C21',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: { color: '#A0A0AB', font: { family: 'Kanit' } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let value = context.raw;
                            return ' ' + formatBudget(value) + ' บาท';
                        }
                    }
                }
            }
        }
    });
}

// Start app
init();
