// SAT 2026 Master Webpage Application Logic

// Application State
let appState = {
  activePage: 'blueprint',
  blueprintChartView: 'domain', // 'domain' or 'section'
  mistakes: [],
  selectedDomainFilter: 'all',
  selectedSectionFilter: 'all',
  searchQuery: ''
};

// Global Chart references
let blueprintChartInstance = null;
let domainChartInstance = null;
let rootCausesChartInstance = null;

// Initialize Application on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initNavigation();
  initDomainFilters();
  renderBlueprintChart();
  renderQuestionCards();
  updateDiagnosticDashboard();
  lucide.createIcons();
});

// ==========================================
// 1. STORAGE & STATE MANAGEMENT
// ==========================================
function initStorage() {
  const saved = localStorage.getItem('sat2026_learner_mistakes');
  if (saved) {
    try {
      appState.mistakes = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse saved mistakes, loading defaults:", e);
      appState.mistakes = [...SAT_2026_DATA.sampleLearnerMistakes];
    }
  } else {
    // Default to sample data so user immediately sees rich analytics
    appState.mistakes = [...SAT_2026_DATA.sampleLearnerMistakes];
    saveMistakesToStorage();
  }
}

function saveMistakesToStorage() {
  localStorage.setItem('sat2026_learner_mistakes', JSON.stringify(appState.mistakes));
  updateMistakeCountBadge();
}

function updateMistakeCountBadge() {
  const badge = document.getElementById('nav-mistake-count');
  if (badge) {
    badge.textContent = appState.mistakes.length;
  }
}

// ==========================================
// 2. PAGE NAVIGATION
// ==========================================
function switchPage(pageId) {
  appState.activePage = pageId;

  // Hide all sections
  document.getElementById('page-blueprint').classList.add('hidden');
  document.getElementById('page-questions').classList.add('hidden');
  document.getElementById('page-tracker').classList.add('hidden');

  // Deactivate all nav buttons
  document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));

  // Show active section and activate button
  if (pageId === 'blueprint') {
    document.getElementById('page-blueprint').classList.remove('hidden');
    document.getElementById('tab-btn-blueprint').classList.add('active');
    setTimeout(() => renderBlueprintChart(), 50);
  } else if (pageId === 'questions') {
    document.getElementById('page-questions').classList.remove('hidden');
    document.getElementById('tab-btn-questions').classList.add('active');
    renderQuestionCards();
  } else if (pageId === 'tracker') {
    document.getElementById('page-tracker').classList.remove('hidden');
    document.getElementById('tab-btn-tracker').classList.add('active');
    updateDiagnosticDashboard();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

function initNavigation() {
  updateMistakeCountBadge();
}

// ==========================================
// 3. BLUEPRINT CHARTS & VIEWS
// ==========================================
function updateBlueprintChartView(viewType) {
  appState.blueprintChartView = viewType;
  const btnDomain = document.getElementById('btn-chart-domain');
  const btnSection = document.getElementById('btn-chart-section');

  if (viewType === 'domain') {
    btnDomain.className = 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-100 text-blue-800';
    btnSection.className = 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200';
  } else {
    btnSection.className = 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-100 text-blue-800';
    btnDomain.className = 'px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200';
  }

  renderBlueprintChart();
}

function renderBlueprintChart() {
  const ctx = document.getElementById('blueprintChart');
  if (!ctx) return;

  if (blueprintChartInstance) {
    blueprintChartInstance.destroy();
  }

  if (appState.blueprintChartView === 'domain') {
    const labels = [
      'Craft & Structure (RW)',
      'Information & Ideas (RW)',
      'Std English Conventions (RW)',
      'Expression of Ideas (RW)',
      'Algebra (Math)',
      'Advanced Math (Math)',
      'Problem Solving & Data (Math)',
      'Geometry & Trig (Math)'
    ];

    const data = [14, 13, 13, 10, 14, 14, 6, 6];
    const colors = [
      '#2563eb', '#4f46e5', '#0284c7', '#0d9488',
      '#9333ea', '#c026d3', '#db2777', '#e11d48'
    ];

    blueprintChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Estimated Average Question Count',
          data: data,
          backgroundColor: colors,
          borderRadius: 8,
          borderSkipped: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel: function(context) {
                const total = 98;
                const pct = ((context.raw / total) * 100).toFixed(1);
                return `~${pct}% of entire SAT`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 18,
            title: { display: true, text: 'Number of Questions', font: { size: 12, weight: 'bold' } },
            grid: { color: '#f1f5f9' }
          },
          x: {
            ticks: {
              autoSkip: false,
              maxRotation: 35,
              minRotation: 25,
              font: { size: 11 }
            },
            grid: { display: false }
          }
        }
      }
    });
  } else {
    // By Section comparison
    blueprintChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Reading and Writing (54 Qs, 64m)', 'Math (44 Qs, 70m)'],
        datasets: [{
          data: [54, 44],
          backgroundColor: ['#2563eb', '#9333ea'],
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }
}

// ==========================================
// 4. QUESTION TYPE DIRECTORY ("WHAT THEY'RE ASKING")
// ==========================================
function initDomainFilters() {
  const select = document.getElementById('domainFilterSelect');
  if (!select) return;

  const domains = new Set();
  SAT_2026_DATA.questionTypes.forEach(q => domains.add(q.domain));

  select.innerHTML = '<option value="all">All Domains</option>';
  domains.forEach(d => {
    select.innerHTML += `<option value="${d}">${d}</option>`;
  });
}

function setSectionQuickFilter(section) {
  const select = document.getElementById('sectionFilterSelect');
  if (select) {
    select.value = section;
    filterQuestions();
  }
}

function filterQuestions() {
  appState.searchQuery = document.getElementById('questionSearchInput').value.toLowerCase().trim();
  appState.selectedSectionFilter = document.getElementById('sectionFilterSelect').value;
  appState.selectedDomainFilter = document.getElementById('domainFilterSelect').value;
  renderQuestionCards();
}

function renderQuestionCards() {
  const container = document.getElementById('questionsContainer');
  if (!container) return;

  const filtered = SAT_2026_DATA.questionTypes.filter(q => {
    const matchesSection = appState.selectedSectionFilter === 'all' || q.section === appState.selectedSectionFilter;
    const matchesDomain = appState.selectedDomainFilter === 'all' || q.domain === appState.selectedDomainFilter;
    const matchesSearch = !appState.searchQuery || 
                          q.title.toLowerCase().includes(appState.searchQuery) ||
                          q.whatItsAsking.toLowerCase().includes(appState.searchQuery) ||
                          q.domain.toLowerCase().includes(appState.searchQuery) ||
                          q.coreSkills.some(s => s.toLowerCase().includes(appState.searchQuery));
    return matchesSection && matchesDomain && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="bg-white rounded-2xl p-12 text-center border border-slate-200">
        <i data-lucide="search-x" class="w-12 h-12 text-slate-400 mx-auto mb-3"></i>
        <h4 class="text-lg font-bold text-slate-800">No question types match your filter</h4>
        <p class="text-xs text-slate-500 mt-1">Try clearing your search query or selecting 'All Domains'.</p>
        <button onclick="resetQuestionFilters()" class="mt-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-xs font-bold hover:bg-blue-100">
          Reset Filters
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(q => createQuestionCardHTML(q)).join('');
  lucide.createIcons();
}

function resetQuestionFilters() {
  document.getElementById('questionSearchInput').value = '';
  document.getElementById('sectionFilterSelect').value = 'all';
  document.getElementById('domainFilterSelect').value = 'all';
  filterQuestions();
}

function createQuestionCardHTML(q) {
  const isRW = q.section === 'Reading and Writing';
  const badgeColor = isRW ? 'bg-blue-100 text-blue-800 border-blue-200' : 'bg-purple-100 text-purple-800 border-purple-200';
  const headerColor = isRW ? 'border-l-4 border-l-blue-600' : 'border-l-4 border-l-purple-600';

  return `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${headerColor} hover-card transition-all" id="card-${q.id}">
      
      <!-- Card Header -->
      <div class="p-6 cursor-pointer" onclick="toggleQuestionCard('${q.id}')">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeColor}">
                ${q.section}
              </span>
              <span class="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                ${q.domain}
              </span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded ${q.difficulty.includes('Hard') ? 'bg-rose-50 text-rose-700' : 'bg-amber-50 text-amber-700'}">
                Difficulty: ${q.difficulty}
              </span>
            </div>
            <h3 class="text-xl font-bold text-slate-900">${q.title}</h3>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/80">
              Freq: ${q.frequency}
            </span>
            <button class="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition" id="toggle-btn-${q.id}">
              <i data-lucide="chevron-down" class="w-5 h-5 transition-transform" id="icon-${q.id}"></i>
            </button>
          </div>
        </div>

        <!-- Highlight Summary: What It's Asking -->
        <div class="mt-4 p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div class="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
            <i data-lucide="help-circle" class="w-4 h-4 text-blue-600"></i>
            What is this question type asking?
          </div>
          <p>${q.whatItsAsking}</p>
        </div>
      </div>

      <!-- Expandable Deep-Dive Body -->
      <div id="body-${q.id}" class="hidden border-t border-slate-100 bg-slate-50/40 p-6 space-y-6">
        
        <!-- Common Stems & Prompt Phrasing -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <i data-lucide="quote" class="w-4 h-4 text-indigo-600"></i> Common Question Prompt Stems
          </h4>
          <ul class="mt-2 space-y-1.5">
            ${q.commonStems.map(stem => `
              <li class="text-xs sm:text-sm text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200 font-medium">
                • "${stem}"
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Core Skills & Tested Mechanisms -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <i data-lucide="check-square" class="w-4 h-4 text-emerald-600"></i> Core Tested Skills
          </h4>
          <div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            ${q.coreSkills.map(skill => `
              <div class="text-xs text-slate-700 bg-emerald-50/60 border border-emerald-200/70 p-2.5 rounded-lg flex items-start gap-2">
                <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0"></i>
                <span>${skill}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Traps & Distractors + Master Strategy (2 Columns) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
            <h5 class="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
              <i data-lucide="alert-octagon" class="w-4 h-4 text-rose-600"></i> Trap Distractor Warning
            </h5>
            <p class="text-xs text-rose-800 mt-2 leading-relaxed">
              ${q.trapWatch}
            </p>
          </div>

          <div class="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
            <h5 class="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
              <i data-lucide="zap" class="w-4 h-4 text-blue-600"></i> Master Solving Strategy
            </h5>
            <p class="text-xs text-blue-800 mt-2 leading-relaxed">
              ${q.masterStrategy}
            </p>
          </div>
        </div>

        <!-- Interactive Realistic 2026 Sample Question -->
        <div class="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
              <i data-lucide="play-circle" class="w-4 h-4 text-purple-600"></i> Interactive 2026 Sample Question
            </span>
            <button onclick="logThisQuestionType('${q.id}')" class="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1">
              <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i> Log as a Mistake
            </button>
          </div>

          <div class="space-y-3 text-xs sm:text-sm">
            <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 font-serif text-slate-900 whitespace-pre-line leading-relaxed">
              ${q.sampleQuestion.passage}
            </div>

            <p class="font-bold text-slate-900">${q.sampleQuestion.stem}</p>

            <!-- Choices -->
            <div class="space-y-2 mt-2" id="choices-container-${q.id}">
              ${q.sampleQuestion.choices.map((choice, idx) => `
                <button onclick="checkSampleAnswer('${q.id}', '${choice.replace(/'/g, "\\'")}')" 
                        class="w-full text-left p-3 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 text-xs sm:text-sm font-medium transition text-slate-800 choice-btn-${q.id}">
                  ${choice}
                </button>
              `).join('')}
            </div>

            <!-- Instant Solution & Explanation Dropdown -->
            <div id="explanation-${q.id}" class="hidden mt-4 p-4 rounded-xl bg-slate-900 text-white space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <i data-lucide="check-circle-2" class="w-4 h-4"></i> Correct Answer: ${q.sampleQuestion.correctAnswer}
                </span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">${q.sampleQuestion.explanation}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

function toggleQuestionCard(cardId) {
  const body = document.getElementById(`body-${cardId}`);
  const icon = document.getElementById(`icon-${cardId}`);
  if (!body || !icon) return;

  if (body.classList.contains('hidden')) {
    body.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    body.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}

function expandAllQuestionCards(expand) {
  SAT_2026_DATA.questionTypes.forEach(q => {
    const body = document.getElementById(`body-${q.id}`);
    const icon = document.getElementById(`icon-${q.id}`);
    if (body && icon) {
      if (expand) {
        body.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      } else {
        body.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }
    }
  });
}

function checkSampleAnswer(questionId, selectedChoice) {
  const q = SAT_2026_DATA.questionTypes.find(item => item.id === questionId);
  if (!q) return;

  const explBox = document.getElementById(`explanation-${questionId}`);
  if (explBox) {
    explBox.classList.remove('hidden');
  }

  const buttons = document.querySelectorAll(`.choice-btn-${questionId}`);
  buttons.forEach(btn => {
    const text = btn.textContent.trim();
    if (text === q.sampleQuestion.correctAnswer) {
      btn.className = "w-full text-left p-3 rounded-lg border-2 border-emerald-500 bg-emerald-50 text-emerald-900 font-bold text-xs sm:text-sm";
    } else if (text === selectedChoice) {
      btn.className = "w-full text-left p-3 rounded-lg border-2 border-rose-500 bg-rose-50 text-rose-900 font-medium text-xs sm:text-sm";
    } else {
      btn.className = "w-full text-left p-3 rounded-lg border border-slate-200 text-slate-400 text-xs sm:text-sm opacity-60";
    }
  });

  lucide.createIcons();
}

function logThisQuestionType(questionId) {
  openQuickLogModal(questionId);
}

// ==========================================
// 5. LEARNER MISTAKE TRACKER & WEAK SPOT HUB
// ==========================================
function updateDiagnosticDashboard() {
  updateMistakeCountBadge();
  renderTopWronglyAnsweredRanking();
  renderTrackerCharts();
  renderPersonalizedPrescription();
  renderMistakesTable();
}

function calculateWeakSpotMetrics() {
  const countsByType = {};
  const countsByDomain = {};
  const countsByReason = {};

  appState.mistakes.forEach(m => {
    // Type counts
    if (!countsByType[m.questionTypeId]) {
      countsByType[m.questionTypeId] = {
        id: m.questionTypeId,
        title: m.questionTypeTitle,
        subject: m.subject,
        domain: m.domain,
        count: 0
      };
    }
    countsByType[m.questionTypeId].count += 1;

    // Domain counts
    countsByDomain[m.domain] = (countsByDomain[m.domain] || 0) + 1;

    // Reason counts
    const reasonKey = m.errorReason || 'Other';
    countsByReason[reasonKey] = (countsByReason[reasonKey] || 0) + 1;
  });

  const rankedTypes = Object.values(countsByType).sort((a, b) => b.count - a.count);

  return {
    totalMistakes: appState.mistakes.length,
    rankedTypes,
    countsByDomain,
    countsByReason
  };
}

function renderTopWronglyAnsweredRanking() {
  const container = document.getElementById('topWrongRankingContainer');
  const statBadge = document.getElementById('totalMistakesStatBadge');
  if (!container) return;

  const { totalMistakes, rankedTypes } = calculateWeakSpotMetrics();

  if (statBadge) {
    statBadge.textContent = `${totalMistakes} Total Logged Practice Errors`;
  }

  if (rankedTypes.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 text-slate-400">
        <i data-lucide="clipboard-check" class="w-10 h-10 mx-auto text-slate-500 mb-2"></i>
        <p class="text-sm font-semibold">No practice mistakes logged yet!</p>
        <p class="text-xs text-slate-500 mt-1">Click 'Load Realistic Demo Data' or 'Log New Error' to see your diagnostic profile.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = rankedTypes.slice(0, 5).map((item, index) => {
    const percentage = totalMistakes > 0 ? Math.round((item.count / totalMistakes) * 100) : 0;
    const isTop1 = index === 0;
    const rankColors = index === 0 ? 'bg-rose-500 text-white' : index === 1 ? 'bg-amber-500 text-white' : 'bg-slate-700 text-slate-200';
    
    return `
      <div class="p-4 rounded-xl bg-slate-800/80 border ${isTop1 ? 'border-rose-500/50 shadow-md shadow-rose-900/20' : 'border-slate-700'} flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div class="flex items-center gap-3.5">
          <div class="w-8 h-8 rounded-lg ${rankColors} flex items-center justify-center font-bold text-sm shrink-0">
            #${index + 1}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold px-2 py-0.5 rounded ${item.subject === 'Math' ? 'bg-purple-900 text-purple-200' : 'bg-blue-900 text-blue-200'}">
                ${item.subject}
              </span>
              <span class="text-xs text-slate-400">${item.domain}</span>
            </div>
            <h4 class="text-sm sm:text-base font-bold text-white mt-0.5">${item.title}</h4>
          </div>
        </div>

        <div class="flex items-center gap-4 sm:text-right">
          <div class="flex-1 sm:w-36">
            <div class="flex justify-between text-xs text-slate-400 mb-1">
              <span>${item.count} errors</span>
              <span class="font-bold ${isTop1 ? 'text-rose-400' : 'text-slate-300'}">${percentage}% of all errors</span>
            </div>
            <div class="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
              <div class="${isTop1 ? 'bg-rose-500' : 'bg-indigo-500'} h-2 rounded-full" style="width: ${percentage}%"></div>
            </div>
          </div>

          <button onclick="jumpToQuestionType('${item.id}')" class="px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-xs text-white font-semibold flex items-center gap-1 transition shrink-0">
            <span>Study Guide</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </button>
        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function jumpToQuestionType(typeId) {
  switchPage('questions');
  setTimeout(() => {
    const card = document.getElementById(`card-${typeId}`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const body = document.getElementById(`body-${typeId}`);
      if (body && body.classList.contains('hidden')) {
        toggleQuestionCard(typeId);
      }
    }
  }, 100);
}

function renderTrackerCharts() {
  const { countsByDomain, countsByReason } = calculateWeakSpotMetrics();

  // Chart 1: Mistakes by Domain
  const ctxDomain = document.getElementById('domainMistakesChart');
  if (ctxDomain) {
    if (domainChartInstance) domainChartInstance.destroy();

    const labels = Object.keys(countsByDomain);
    const data = Object.values(countsByDomain);
    const palette = ['#2563eb', '#9333ea', '#e11d48', '#059669', '#d97706', '#0284c7', '#4f46e5', '#db2777'];

    domainChartInstance = new Chart(ctxDomain, {
      type: 'doughnut',
      data: {
        labels: labels.length ? labels : ['No Data'],
        datasets: [{
          data: data.length ? data : [1],
          backgroundColor: data.length ? palette.slice(0, labels.length) : ['#e2e8f0'],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, font: { size: 10 } } }
        }
      }
    });
  }

  // Chart 2: Root Causes
  const ctxReason = document.getElementById('rootCausesChart');
  if (ctxReason) {
    if (rootCausesChartInstance) rootCausesChartInstance.destroy();

    const labels = Object.keys(countsByReason);
    const data = Object.values(countsByReason);

    rootCausesChartInstance = new Chart(ctxReason, {
      type: 'bar',
      data: {
        labels: labels.length ? labels : ['No Data'],
        datasets: [{
          label: 'Mistake Occurrences',
          data: data.length ? data : [0],
          backgroundColor: '#7c3aed',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: { precision: 0 },
            grid: { color: '#f8fafc' }
          },
          y: {
            ticks: { font: { size: 10 } },
            grid: { display: false }
          }
        }
      }
    });
  }
}

function renderPersonalizedPrescription() {
  const container = document.getElementById('prescriptionContainer');
  if (!container) return;

  const { rankedTypes } = calculateWeakSpotMetrics();

  if (rankedTypes.length === 0) {
    container.innerHTML = `
      <div class="text-slate-400 text-center py-4">
        <p class="text-xs">Log errors to generate a personalized study prescription.</p>
      </div>
    `;
    return;
  }

  const top1 = rankedTypes[0];
  const top2 = rankedTypes[1] || null;

  container.innerHTML = `
    <div class="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
      <i data-lucide="stethoscope" class="w-4 h-4 text-emerald-600"></i>
      Targeted AI Diagnostic Prescription
    </div>
    <h3 class="text-lg font-bold text-slate-900">Your Recommended Action Plan</h3>
    <p class="text-xs text-slate-600 mt-1">
      Based on your practice log, your primary point of score leakage is 
      <strong class="text-slate-900">${top1.title}</strong> (${top1.count} errors). Here is your high-yield drill plan:
    </p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-xs">
        <div class="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
          Priority #1: ${top1.title} (${top1.subject})
        </div>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">
          ${getRemediationTipForType(top1.id)}
        </p>
      </div>

      ${top2 ? `
        <div class="bg-white p-4 rounded-xl border border-emerald-200/80 shadow-xs">
          <div class="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
            <i data-lucide="check-circle" class="w-4 h-4 text-emerald-600"></i>
            Priority #2: ${top2.title} (${top2.subject})
          </div>
          <p class="text-xs text-slate-600 mt-1 leading-relaxed">
            ${getRemediationTipForType(top2.id)}
          </p>
        </div>
      ` : ''}
    </div>
  `;
  lucide.createIcons();
}

function getRemediationTipForType(typeId) {
  const tips = {
    'rw-inferences': 'Focus on conservative logic. Do not make extrapolations. If a statement goes beyond the strict text premises (e.g. introduces new conditions), immediately discard it.',
    'rw-words-in-context': 'Ignore secondary colloquial definitions. Predict your own simple word before reading the choices, and match tone and polarity.',
    'rw-rhetorical-synthesis': 'Read the question stem goal first! Eliminate true facts from the bullets that do not specifically fulfill the required goal.',
    'rw-standard-english-boundaries': 'Master the Semicolon and Colon rules: text before semicolon/colon must always be a complete independent clause.',
    'math-circle-theorems-equations': 'Practice completing the square (add (b/2)^2 to both sides). Check Desmos graphs to visually confirm the radius and center coordinates.',
    'math-quadratic-equations-parabolas': 'Review the vertex formula x = -b/(2a) and standard vertex form y = a(x - h)^2 + k. Memorize discriminant conditions (b^2 - 4ac).',
    'math-linear-functions-word-problems': 'Isolate rates (slope = per/each) from fixed baselines (y-intercept = initial/flat fee).',
    'math-ratios-percentages-units': 'Use multiplier fractions for consecutive percentage shifts: (1 - d1) * (1 + p2). Never add percentages directly!'
  };

  return tips[typeId] || 'Review the master strategy in the Question Directory and complete 10 focused drills in Bluebook / Khan Academy.';
}

function renderMistakesTable() {
  const tbody = document.getElementById('mistakesTableBody');
  if (!tbody) return;

  if (appState.mistakes.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="py-8 text-center text-slate-400">
          No practice mistakes logged yet. Click 'Log New Error' or 'Load Demo Data' above.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = appState.mistakes.map(m => `
    <tr class="hover:bg-slate-50 transition">
      <td class="py-3 px-4">
        <div class="font-medium text-slate-900">${m.date}</div>
        <div class="text-[11px] text-slate-400">${m.testSource || 'Custom Practice'} ${m.questionNumber ? `#${m.questionNumber}` : ''}</div>
      </td>
      <td class="py-3 px-4">
        <span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold ${m.subject === 'Math' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}">
          ${m.subject}
        </span>
        <div class="text-[11px] text-slate-500 mt-0.5">${m.domain}</div>
      </td>
      <td class="py-3 px-4 font-semibold text-slate-800">
        ${m.questionTypeTitle}
      </td>
      <td class="py-3 px-4">
        <span class="px-2 py-0.5 rounded text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-100">
          ${m.errorReason}
        </span>
      </td>
      <td class="py-3 px-4 text-[11px] text-slate-600">
        ${m.confidenceLevel}
      </td>
      <td class="py-3 px-4 max-w-xs">
        <div class="text-xs text-slate-700 truncate" title="${m.notes}">${m.notes || '—'}</div>
        ${m.actionPlan ? `<div class="text-[11px] text-emerald-700 font-medium truncate" title="${m.actionPlan}">Fix: ${m.actionPlan}</div>` : ''}
      </td>
      <td class="py-3 px-4 text-right">
        <button onclick="deleteMistake('${m.id}')" class="text-slate-400 hover:text-rose-600 p-1 rounded transition" title="Delete entry">
          <i data-lucide="trash" class="w-4 h-4"></i>
        </button>
      </td>
    </tr>
  `).join('');

  lucide.createIcons();
}

function deleteMistake(id) {
  appState.mistakes = appState.mistakes.filter(m => m.id !== id);
  saveMistakesToStorage();
  updateDiagnosticDashboard();
  showToast('Practice mistake entry deleted');
}

function clearAllMistakes() {
  if (confirm('Are you sure you want to clear all logged practice errors?')) {
    appState.mistakes = [];
    saveMistakesToStorage();
    updateDiagnosticDashboard();
    showToast('All mistake logs cleared');
  }
}

function loadSampleMistakes() {
  appState.mistakes = [...SAT_2026_DATA.sampleLearnerMistakes];
  saveMistakesToStorage();
  updateDiagnosticDashboard();
  showToast('Realistic demo practice errors loaded!');
}

// ==========================================
// 6. MODAL & ERROR FORM HANDLING
// ==========================================
function openQuickLogModal(preselectedTypeId = null) {
  const modal = document.getElementById('logErrorModal');
  if (!modal) return;

  updateModalQuestionTypeOptions();

  if (preselectedTypeId) {
    const q = SAT_2026_DATA.questionTypes.find(item => item.id === preselectedTypeId);
    if (q) {
      document.getElementById('modalSubjectSelect').value = q.section;
      updateModalQuestionTypeOptions();
      document.getElementById('modalQuestionTypeSelect').value = q.id;
    }
  }

  modal.classList.remove('hidden');
  lucide.createIcons();
}

function closeQuickLogModal() {
  const modal = document.getElementById('logErrorModal');
  if (modal) modal.classList.add('hidden');
}

function updateModalQuestionTypeOptions() {
  const subject = document.getElementById('modalSubjectSelect').value;
  const select = document.getElementById('modalQuestionTypeSelect');
  if (!select) return;

  const filtered = SAT_2026_DATA.questionTypes.filter(q => q.section === subject);
  select.innerHTML = filtered.map(q => `<option value="${q.id}">${q.title} (${q.domain})</option>`).join('');
}

function handleMistakeSubmit(event) {
  event.preventDefault();

  const typeId = document.getElementById('modalQuestionTypeSelect').value;
  const qType = SAT_2026_DATA.questionTypes.find(q => q.id === typeId);

  const newMistake = {
    id: 'mistake-' + Date.now(),
    date: new Date().toISOString().split('T')[0],
    subject: document.getElementById('modalSubjectSelect').value,
    questionTypeId: typeId,
    questionTypeTitle: qType ? qType.title : 'Custom Type',
    domain: qType ? qType.domain : 'General',
    testSource: document.getElementById('modalTestSource').value || 'Practice Drill',
    questionNumber: document.getElementById('modalQuestionNumber').value ? parseInt(document.getElementById('modalQuestionNumber').value) : null,
    errorReason: document.getElementById('modalErrorReason').value,
    confidenceLevel: document.getElementById('modalConfidence').value,
    notes: document.getElementById('modalNotes').value,
    actionPlan: document.getElementById('modalActionPlan').value
  };

  appState.mistakes.unshift(newMistake);
  saveMistakesToStorage();
  closeQuickLogModal();
  updateDiagnosticDashboard();
  showToast('New practice error recorded to tracker!');

  // Clear input fields
  document.getElementById('modalNotes').value = '';
  document.getElementById('modalActionPlan').value = '';
  document.getElementById('modalQuestionNumber').value = '';
}

// ==========================================
// 7. EXPORT DATA (JSON & CSV)
// ==========================================
function exportMistakesJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState.mistakes, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `sat2026_mistakes_log_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Exported mistakes as JSON');
}

function exportMistakesCSV() {
  if (appState.mistakes.length === 0) {
    showToast('No mistakes to export');
    return;
  }

  const headers = ['Date', 'Subject', 'Domain', 'Question Type', 'Source', 'Question Number', 'Error Reason', 'Confidence', 'Notes', 'Action Plan'];
  const rows = appState.mistakes.map(m => [
    m.date,
    `"${m.subject}"`,
    `"${m.domain}"`,
    `"${m.questionTypeTitle}"`,
    `"${m.testSource || ''}"`,
    m.questionNumber || '',
    `"${m.errorReason}"`,
    `"${m.confidenceLevel}"`,
    `"${(m.notes || '').replace(/"/g, '""')}"`,
    `"${(m.actionPlan || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `sat2026_mistakes_log_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast('Exported mistakes as CSV');
}

// ==========================================
// 8. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-20', 'pointer-events-none');

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-20', 'pointer-events-none');
  }, 3000);
}
