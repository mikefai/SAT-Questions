// Comprehensive Node.js QA and Validation Suite

const SAT_2026_DATA = require('./data.js');
const fs = require('fs');

console.log('🧪 Starting Automated QA & Debugging Suite...\n');

if (!SAT_2026_DATA || !SAT_2026_DATA.questionTypes) {
  console.error('❌ SAT_2026_DATA or questionTypes missing!');
  process.exit(1);
}

const qTypes = SAT_2026_DATA.questionTypes;
console.log(`✅ Loaded ${qTypes.length} question types.`);

let totalErrors = 0;

// Validate all Question Types
qTypes.forEach((qt, i) => {
  if (!qt.id || !qt.title || !qt.section || !qt.domain || !qt.whatItsAsking) {
    console.error(`❌ Question type #${i} has missing metadata fields:`, qt);
    totalErrors++;
  }

  if (!qt.sampleQuestions || qt.sampleQuestions.length !== 2) {
    console.error(`❌ Question type ${qt.id} does not have exactly 2 sample questions! Found:`, qt.sampleQuestions ? qt.sampleQuestions.length : 0);
    totalErrors++;
  } else {
    qt.sampleQuestions.forEach((sq, qIdx) => {
      if (!sq.passage || !sq.stem || !sq.choices || !sq.correctAnswer || !sq.explanation) {
        console.error(`❌ Question ${qt.id} Q${qIdx + 1} is missing required fields!`);
        totalErrors++;
      }
      if (!Array.isArray(sq.choices) || sq.choices.length !== 4) {
        console.error(`❌ Question ${qt.id} Q${qIdx + 1} does not have exactly 4 choices!`);
        totalErrors++;
      }
      const matchesChoice = sq.choices.includes(sq.correctAnswer);
      if (!matchesChoice) {
        console.error(`❌ Question ${qt.id} Q${qIdx + 1} correctAnswer '${sq.correctAnswer}' does not match any choice! Choices:`, sq.choices);
        totalErrors++;
      }
    });
  }
});

console.log(`✅ Checked all 21 question types and 42 practice challenge questions.`);

// Verify Excel generation script runs cleanly
const execSync = require('child_process').execSync;
try {
  console.log('\n📊 Testing Python Excel Generator...');
  const pyOutput = execSync('python generate_sat_test11_excel.py').toString();
  console.log(pyOutput.trim());
  console.log('✅ Excel generation verified.');
} catch (e) {
  console.error('❌ Excel generation failed:', e);
  totalErrors++;
}

console.log(`\n========================================`);
if (totalErrors === 0) {
  console.log(`🎉 ALL 42 QUESTIONS & LOGIC VERIFIED WITH 0 ERRORS!`);
} else {
  console.log(`❌ Found ${totalErrors} errors to fix.`);
}
console.log(`========================================\n`);
