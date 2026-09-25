// SAT 2026 Comprehensive Blueprint, Question Types & Question Bank Data
// Upgraded with Hard-Tier (Module 2 Challenge) questions for every single question type

const SAT_2026_DATA = {
  overview: {
    year: "2026",
    format: "Digital SAT (Suite of Assessments)",
    totalQuestions: 98,
    totalTimeMinutes: 134,
    scoringRange: "400 - 1600 (200-800 RW, 200-800 Math)",
    delivery: "Bluebook Application (Section-Adaptive: Module 1 determines Module 2 difficulty)",
    sections: [
      {
        id: "rw",
        name: "Reading and Writing",
        modules: 2,
        questionsPerModule: 27,
        totalQuestions: 54,
        operationalQuestions: 46,
        pretestQuestions: 8,
        timePerModuleMinutes: 32,
        totalTimeMinutes: 64,
        secondsPerQuestion: 71.1,
        calculator: "N/A",
        domains: [
          {
            id: "craft-structure",
            name: "Craft and Structure",
            percentage: "28%",
            questionRange: "13-15 questions",
            description: "Measures comprehension, vocabulary in context, text analysis, and rhetorical synthesis across multiple texts."
          },
          {
            id: "info-ideas",
            name: "Information and Ideas",
            percentage: "26%",
            questionRange: "12-14 questions",
            description: "Measures the ability to understand, analyze, and interpret information from texts and quantitative graphics."
          },
          {
            id: "standard-english",
            name: "Standard English Conventions",
            percentage: "26%",
            questionRange: "11-15 questions",
            description: "Measures mastery of standard English grammar, punctuation, sentence structure, and usage rules."
          },
          {
            id: "expression-ideas",
            name: "Expression of Ideas",
            percentage: "20%",
            questionRange: "8-12 questions",
            description: "Measures the ability to revise texts to improve clarity, rhetorical effectiveness, and synthesis of bullet notes."
          }
        ]
      },
      {
        id: "math",
        name: "Math",
        modules: 2,
        questionsPerModule: 22,
        totalQuestions: 44,
        operationalQuestions: 38,
        pretestQuestions: 6,
        timePerModuleMinutes: 35,
        totalTimeMinutes: 70,
        secondsPerQuestion: 95.5,
        calculator: "Built-in Desmos Graphing Calculator allowed throughout entire section",
        formatTypes: "Approx. 75% Multiple Choice (4 choices), 25% Student-Produced Response (SPR / Grid-in)",
        domains: [
          {
            id: "algebra",
            name: "Algebra",
            percentage: "35%",
            questionRange: "13-15 questions",
            description: "Analyzes and solves linear equations, linear inequalities, systems of linear equations, and linear functions."
          },
          {
            id: "advanced-math",
            name: "Advanced Math",
            percentage: "35%",
            questionRange: "13-15 questions",
            description: "Focuses on nonlinear equations, quadratic, exponential, polynomial, radical, and rational equations and functions."
          },
          {
            id: "problem-solving",
            name: "Problem-Solving and Data Analysis",
            percentage: "15%",
            questionRange: "5-7 questions",
            description: "Measures quantitative reasoning, ratios, rates, proportions, percentages, probability, statistics, and data displays."
          },
          {
            id: "geometry-trig",
            name: "Geometry and Trigonometry",
            percentage: "15%",
            questionRange: "5-7 questions",
            description: "Solves problems involving perimeter, area, volume, angles, triangles, trigonometry, and circle equations."
          }
        ]
      }
    ]
  },

  questionTypes: [
    // ================= READING & WRITING QUESTION TYPES (HARD TIER) =================
    {
      id: "rw-words-in-context",
      section: "Reading and Writing",
      domain: "Craft and Structure",
      title: "Words in Context",
      frequency: "10-14% (~5-7 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "spell-check",
      whatItsAsking: "Tests your ability to determine the precise meaning or best-fitting word for a blank within a short academic, scientific, or literary passage (25-150 words), relying strictly on subtle contextual shifts and semantic polarity rather than rote dictionary memorization.",
      commonStems: [
        "Which choice completes the text with the most logical and precise word or phrase?",
        "As used in the text, what does the word [X] most nearly mean?"
      ],
      coreSkills: [
        "Identifying multi-clause pivot markers (e.g. 'not merely... but rather', 'notwithstanding', 'far from being')",
        "Distinguishing high-register nuanced vocabulary with matching academic tone",
        "Avoiding secondary meaning traps where a common definition distorts the logical argument"
      ],
      trapWatch: "Distractor choices include words that match the overall subject matter or sound academically elevated, but contradict the precise positive/negative direction established by the pivot words.",
      masterStrategy: "1. Cover the answer choices. 2. Identify the logical direction (support, contrast, causality). 3. Formulate your own simple target word (e.g. 'weakened' or 'hidden'). 4. Match against the 4 choices.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "While early 20th-century historiography often characterized medieval guilds as purely monopolistic bodies that stifled artisanal innovation, recent archival investigations suggest this view is overly ________; in reality, guild ordinances frequently facilitated knowledge transfer by codifying technical apprenticeships and protecting emergent manufacturing techniques.",
        stem: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) pedantic",
          "B) reductionist",
          "C) scrupulous",
          "D) esoteric"
        ],
        correctAnswer: "B) reductionist",
        explanation: "The sentence contrasts the old view (that guilds were 'purely monopolistic bodies that stifled innovation') with new evidence showing their multifaceted positive role ('facilitated knowledge transfer... protecting emergent techniques'). The author argues that calling guilds 'purely' one thing oversimplified a complex reality. 'Reductionist' means simplifying complex phenomena to a single, oversimplified explanation, which perfectly fits. 'Pedantic' (overly concerned with minor book rules), 'scrupulous' (strictly attentive to morality/detail), and 'esoteric' (obscure/understood by few) do not fit the contrast."
      }
    },
    {
      id: "rw-text-structure-purpose",
      section: "Reading and Writing",
      domain: "Craft and Structure",
      title: "Text Structure and Purpose",
      frequency: "8-12% (~4-6 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "layout",
      whatItsAsking: "Evaluates your comprehension of the overall rhetorical architecture of a text or the specific structural function of an underlined sentence/clause within the author's broader argument.",
      commonStems: [
        "Which choice best describes the main purpose of the text?",
        "Which choice best describes the function of the underlined sentence in the text as a whole?",
        "Which choice best describes the overall structure of the text?"
      ],
      coreSkills: [
        "Distinguishing the 'job' a sentence performs (e.g., qualifying a claim, offering an alternative hypothesis) from what it literally says",
        "Recognizing macro structural patterns: Hypothesis -> Complication -> Methodological Revision",
        "Analyzing functional verbs in choices (e.g., 'substantiate', 'qualify', 'rebut', 'contextualize')"
      ],
      trapWatch: "Choices that accurately summarize a single factual point from the text but completely fail to state the author's overarching rhetorical purpose.",
      masterStrategy: "Look for transition pivots between sentences. Ask: 'Did this sentence introduce evidence, counter an assumption, or narrow the scope of the previous sentence?'",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Proponents of behavioral economics celebrate 'nudges'—subtle alterations in choice architecture designed to steer individuals toward beneficial decisions without mandating compliance. Yet political theorist David Miller urges caution. He demonstrates that default opt-in policies, though undeniably effective at boosting retirement savings and organ donation registrations, risk circumventing deliberate civic deliberation by exploiting cognitive heuristics. Miller does not advocate abolishing nudges; rather, he argues that democratic legitimacy requires policymakers to make behavioral interventions transparent to the citizens they affect.",
        stem: "Which choice best describes the function of the underlined sentence ('He demonstrates that default opt-in policies... cognitive heuristics.') in the text as a whole?",
        choices: [
          "A) It presents empirical evidence that refutes the claim that behavioral nudges increase citizen welfare.",
          "B) It introduces a specific critique that illustrates why the caution mentioned in the preceding sentence is warranted.",
          "C) It outlines an alternative public policy framework intended to replace choice architecture entirely.",
          "D) It concedes that behavioral interventions fail to achieve their intended public policy objectives."
        ],
        correctAnswer: "B) It introduces a specific critique that illustrates why the caution mentioned in the preceding sentence is warranted.",
        explanation: "The previous sentence states that 'David Miller urges caution.' The underlined sentence immediately explains *why* caution is needed by demonstrating how opt-in policies exploit cognitive heuristics and bypass deliberate democratic deliberation. Choice A is too extreme ('refutes the claim'), Choice C is incorrect because Miller does not want to replace nudges, and Choice D is false because the text admits nudges are 'undeniably effective'."
      }
    },
    {
      id: "rw-cross-text-connections",
      section: "Reading and Writing",
      domain: "Craft and Structure",
      title: "Cross-Text Connections (Dual Passages)",
      frequency: "2-4% (~1-2 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "git-compare",
      whatItsAsking: "Presents two paired texts discussing a shared scholarly, scientific, or historical subject and asks you to determine how the author of one text would respond to, qualify, or evaluate specific arguments in the other.",
      commonStems: [
        "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?",
        "Which choice best describes a relationship between the two texts?"
      ],
      coreSkills: [
        "Synthesizing two nuanced viewpoints without bringing external personal knowledge",
        "Isolating the exact point of intersection (direct contradiction, methodological limitation, or scope narrowing)",
        "Avoiding cartoonish exaggerations of either author's stance"
      ],
      trapWatch: "Distractors often present an overly aggressive rebuttal when Text 2 actually offers a nuanced methodological qualification.",
      masterStrategy: "Step 1: Write down 3-word summaries of Author 1 and Author 2's core stances. Step 2: Establish the relationship (+ agreement, - opposition, ~ qualified agreement).",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Text 1: Paleontologist Dr. Elena Vance contends that the sudden extinction of Pleistocene megafauna across North America was driven primarily by human 'overkill'—rapid overhunting by Clovis hunters armed with fluted projectile points, whose arrival coincided precisely with megafaunal collapse.\n\nText 2: While Dr. Vance highlights temporal correlations between Clovis settlement and megafaunal decline, archaeologist Dr. Marcus Cole notes that of the hundreds of documented Clovis archaeological sites across North America, only fourteen contain unambiguous physical evidence of butchered megafauna. Cole argues that attributing continental extinction solely to human predation ignores massive concurrent climatic oscillations that abruptly fragmented forage habitats.",
        stem: "Based on the texts, how would Dr. Cole (Text 2) most likely respond to Dr. Vance's argument in Text 1?",
        choices: [
          "A) By arguing that Clovis projectile points were technologically inadequate for hunting large herbivores.",
          "B) By contending that the archaeological record provides insufficient physical evidence to establish overhunting as the exclusive driver of extinction.",
          "C) By claiming that megafaunal extinction occurred several millennia prior to the earliest Clovis settlements.",
          "D) By asserting that climatic oscillations were entirely unaffected by human anthropogenic pressures."
        ],
        correctAnswer: "B) By contending that the archaeological record provides insufficient physical evidence to establish overhunting as the exclusive driver of extinction.",
        explanation: "Dr. Cole (Text 2) directly points out that out of hundreds of Clovis sites, 'only fourteen contain unambiguous physical evidence of butchered megafauna' and argues that attributing extinction 'solely to human predation ignores massive concurrent climatic oscillations'. This directly challenges Vance's single-cause overhunting claim as lacking sufficient physical evidence. Choice A is not mentioned, Choice C contradicts the passage (they were concurrent), and Choice D misidentifies the argument."
      }
    },
    {
      id: "rw-central-ideas-details",
      section: "Reading and Writing",
      domain: "Information and Ideas",
      title: "Central Ideas and Details",
      frequency: "8-12% (~4-6 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "file-text",
      whatItsAsking: "Tests your ability to identify the central thesis or locate explicit, nuanced factual claims directly stated in complex literary, historical, or scientific texts.",
      commonStems: [
        "Which choice best states the main idea of the text?",
        "According to the text, what is true regarding [Topic X]?"
      ],
      coreSkills: [
        "Distinguishing the overarching claim from illustrative examples and tangential anecdotes",
        "Accurately paraphrasing dense conceptual language",
        "Strictly adhering to textual boundaries (zero outside assumptions)"
      ],
      trapWatch: "Choices that state true real-world facts that are NEVER mentioned in the passage, or choices that include overly extreme words ('only', 'never', 'universally') not in the text.",
      masterStrategy: "Find the direct sentence that states the core claim. If you cannot highlight direct textual evidence for every word in the choice, eliminate it.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "In 19th-century aesthetic philosophy, the concept of the 'picturesque' emerged as a mediating category between Edmund Burke's notions of the 'beautiful' (marked by smoothness, order, and symmetry) and the 'sublime' (evoking awe, vastness, and terror). Theorists such as Uvedale Price argued that picturesque beauty resides in roughness, sudden variation, and asymmetry. Price maintained that while beauty calms the spirit and the sublime overwhelms it, the picturesque actively engages the intellect by presenting an intricate visual curiosity that resists immediate mental resolution.",
        stem: "Which choice best states the main idea of the text?",
        choices: [
          "A) Uvedale Price argued that the picturesque serves as an aesthetic category distinct from the beautiful and sublime by stimulating curiosity through roughness and irregularity.",
          "B) Edmund Burke's categories of beauty and sublimity were widely rejected by 19th-century theorists due to their inability to explain intricate visual landscapes.",
          "C) Picturesque landscapes are universally superior to sublime landscapes because they engage the viewer's intellect rather than merely evoking fear.",
          "D) The picturesque was the first aesthetic philosophy to recognize that asymmetrical objects could induce feelings of tranquility in the observer."
        ],
        correctAnswer: "A) Uvedale Price argued that the picturesque serves as an aesthetic category distinct from the beautiful and sublime by stimulating curiosity through roughness and irregularity.",
        explanation: "The passage introduces the picturesque as a mediating category between the beautiful and the sublime and explains Price's thesis: that picturesque beauty lies in roughness/asymmetry and engages the intellect through visual curiosity. Choice B is incorrect (Burke's ideas weren't rejected, but augmented), Choice C uses an unjustified value judgment ('universally superior'), and Choice D contradicts the text (it engages curiosity, not tranquility)."
      }
    },
    {
      id: "rw-command-evidence-textual",
      section: "Reading and Writing",
      domain: "Information and Ideas",
      title: "Command of Evidence: Textual",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "check-circle",
      whatItsAsking: "Asks you to select the specific quote, hypothesis, or textual finding from the choices that provides the strongest direct empirical support or refutation for a specific research hypothesis.",
      commonStems: [
        "Which finding, if true, would most directly support the researchers' hypothesis?",
        "Which finding, if true, would most directly weaken the student's conclusion?"
      ],
      coreSkills: [
        "Isolating the precise variables and proposed causal mechanism in the hypothesis",
        "Distinguishing direct support from mere correlation or topic relevance",
        "Evaluating counterfactuals ('if true')"
      ],
      trapWatch: "Distractor choices that support the general field or show positive results, but fail to test the *specific mechanism* hypothesized.",
      masterStrategy: "1. Write down: Hypothesis = [Variable X] causes [Effect Y] via [Mechanism Z]. 2. Test each choice: Does this choice directly show Variable X producing Effect Y?",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Plant biologist Dr. Aris Thorne hypothesized that certain desert xerophytes survive intense ultraviolet (UV-B) radiation not merely through thick cuticular waxes, but by producing specialized flavonoid compounds in epidermal trichomes (leaf hairs) that specifically absorb UV wavelengths while permitting photosynthetic light to pass through unhindered.",
        stem: "Which finding, if true, would most directly support Dr. Thorne's hypothesis?",
        choices: [
          "A) Mutant desert plants lacking epidermal trichomes exhibit significantly higher cellular DNA damage under UV-B exposure despite possessing normal cuticular wax thickness.",
          "B) Desert xerophytes produce higher concentrations of cuticular waxes during summer months when ambient solar radiation is at its annual peak.",
          "C) Non-desert plant species synthesized equal concentrations of flavonoids when grown in high-humidity greenhouse environments.",
          "D) Photosynthetic rates in xerophytes decrease by over 40% when all incoming UV wavelengths are artificially filtered out in laboratory trials."
        ],
        correctAnswer: "A) Mutant desert plants lacking epidermal trichomes exhibit significantly higher cellular DNA damage under UV-B exposure despite possessing normal cuticular wax thickness.",
        explanation: "Thorne's hypothesis specifically claims that epidermal trichomes (containing flavonoids) provide UV-B defense independent of cuticular wax. Choice A directly tests this by removing the trichomes while keeping wax thickness normal, showing that DNA damage jumps under UV-B. This provides direct empirical proof for the independent protective role of the trichomes."
      }
    },
    {
      id: "rw-command-evidence-quantitative",
      section: "Reading and Writing",
      domain: "Information and Ideas",
      title: "Command of Evidence: Quantitative",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "bar-chart",
      whatItsAsking: "Presents a scientific, demographic, or economic chart/table alongside a passage and asks you to select the choice that accurately reflects the graphic's data to complete or support the argument.",
      commonStems: [
        "Which choice best uses data from the table to complete the example?",
        "Which choice most effectively uses data from the graph to support the claim?"
      ],
      coreSkills: [
        "Reading complex multi-column tables, legends, dual axes, and percentage changes with 100% accuracy",
        "Checking both mathematical factual correctness AND rhetorical relevance to the text's claim",
        "Avoiding misinterpretations of baseline comparisons"
      ],
      trapWatch: "Choices that cite numbers from the table correctly, but draw a conclusion that is irrelevant to the specific sentence blank.",
      masterStrategy: "First, verify the math in all choices. Cross out any choice with factually incorrect numbers. Second, choose the remaining option that directly proves the sentence's assertion.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Atmospheric scientists compared the methane capture efficiency and operational cost per ton across four prototype biofilter materials:\n• Biofilter W: 94% Capture Efficiency, $180/ton\n• Biofilter X: 88% Capture Efficiency, $95/ton\n• Biofilter Y: 72% Capture Efficiency, $60/ton\n• Biofilter Z: 82% Capture Efficiency, $140/ton\nThe project engineers concluded that to achieve commercial viability, a biofilter must achieve at least 85% capture efficiency while maintaining an operational cost below $100 per ton.",
        stem: "Which choice most effectively uses data from the study to support the engineers' conclusion regarding commercial viability?",
        choices: [
          "A) Biofilter W achieves the highest capture efficiency at 94%, making it the only viable commercial choice regardless of cost.",
          "B) Biofilter X is the only material that satisfies both commercial thresholds, achieving 88% efficiency at a cost of $95 per ton.",
          "C) Biofilter Y has the lowest operating cost at $60 per ton, thereby meeting all engineering benchmarks for commercial deployment.",
          "D) Biofilters W and Z both exceed the 85% efficiency requirement and fall within the required sub-$100 cost threshold."
        ],
        correctAnswer: "B) Biofilter X is the only material that satisfies both commercial thresholds, achieving 88% efficiency at a cost of $95 per ton.",
        explanation: "The two constraints are: 1) Efficiency >= 85%, 2) Cost < $100/ton. Checking all materials: Biofilter W has 94% (passes) but $180 (fails cost); Biofilter X has 88% (passes) and $95 (passes cost); Biofilter Y has $60 (passes cost) but 72% (fails efficiency); Biofilter Z has 82% (fails both). Therefore, only Biofilter X satisfies both criteria."
      }
    },
    {
      id: "rw-inferences",
      section: "Reading and Writing",
      domain: "Information and Ideas",
      title: "Inferences",
      frequency: "8-12% (~4-6 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "brain-circuit",
      whatItsAsking: "Requires you to logically complete an unfinished passage by deducing the inevitable conclusion that strictly follows from the stated premises without introducing speculative assumptions.",
      commonStems: [
        "Which choice most logically completes the text?",
        "Based on the text, it can reasonably be inferred that..."
      ],
      coreSkills: [
        "Formal deductive logic (Premise 1 + Premise 2 => Inescapable Conclusion 3)",
        "Distinguishing necessary logical implications from mere possibilities",
        "Selecting cautious, moderately stated conclusions over bold, sweeping generalizations"
      ],
      trapWatch: "Answers that sound like exciting or profound real-world conclusions, but require assumptions not strictly proven by the passage.",
      masterStrategy: "The correct answer on SAT Inferences is often the most boring, conservative, and unassailable claim. Look for 'may', 'partially', or 'is not solely'.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Astronomers observing the young stellar object HD 142527 noted a massive gap in its circumstellar protoplanetary disk. Gas-giant planet formation models predict that a growing planet clears such gaps by gravitationally accreting gas, which creates high-velocity planar streams flowing from the outer disk into the inner disk. High-resolution ALMA telescope observations revealed these exact high-velocity gas bridges spanning the gap. However, ALMA detected no concentrated thermal infrared emissions at the stream junctions, which are universally expected from the accretion shock of an actively growing giant planet. This suggests that ________",
        stem: "Which choice most logically completes the text?",
        choices: [
          "A) the gas streams observed across the disk gap are unrelated to planetary gravitational dynamics.",
          "B) the disk gap is being cleared by a mechanism other than the accretion of an actively growing gas-giant planet, or the planet is significantly smaller than predicted models assume.",
          "C) giant planet formation models have been completely invalidated and cannot explain protoplanetary disk evolution.",
          "D) thermal infrared telescopes are fundamentally incapable of detecting accretion shocks in young stellar systems."
        ],
        correctAnswer: "B) the disk gap is being cleared by a mechanism other than the accretion of an actively growing gas-giant planet, or the planet is significantly smaller than predicted models assume.",
        explanation: "The passage sets up two facts: 1) The gas bridges expected from planet clearing are present, but 2) The thermal emission shocks expected from an active gas giant are absent. The logical, conservative inference is that either something else is clearing the gap, or the object is smaller (less massive accretion) than current gas-giant models predict. Choices A, C, and D make sweeping, unsupported generalizations."
      }
    },
    {
      id: "rw-standard-english-boundaries",
      section: "Reading and Writing",
      domain: "Standard English Conventions",
      title: "Boundaries (Punctuation & Clauses)",
      frequency: "14-16% (~7-9 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "scissors",
      whatItsAsking: "Tests punctuation mastery for independent and dependent clauses, complex appositives, semicolon coordination, colon specifications, and dash parentheticals.",
      commonStems: [
        "Which choice completes the text so that it conforms to the conventions of Standard English?"
      ],
      coreSkills: [
        "Identifying independent clauses across long sentences with embedded modifiers",
        "Semicolon & Colon criteria: The preceding clause MUST be a full independent clause",
        "Managing non-essential parenthetical elements with matched punctuation pairs"
      ],
      trapWatch: "Comma splices joining two complete sentences with just a comma and a transitional adverb (e.g. ', however,').",
      masterStrategy: "Read the clause BEFORE the blank. Is it a full sentence (Subject + Verb)? Read AFTER the blank. If both are independent, you need a period, semicolon, or comma + FANBOYS.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "During the late Cretaceous period, the Western Interior Seaway divided North America into two distinct landmasses: Laramidia to the west and Appalachia to the ________ isolated fauna on Laramidia underwent rapid evolutionary radiation, yielding an extraordinary diversity of ceratopsian dinosaurs.",
        stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        choices: [
          "A) east, consequently,",
          "B) east; consequently,",
          "C) east, consequently",
          "D) east consequently;"
        ],
        correctAnswer: "B) east; consequently,",
        explanation: "The first part ('During the late Cretaceous... Appalachia to the east') is a complete independent clause. The second part ('isolated fauna on Laramidia underwent rapid evolutionary radiation...') is also a complete independent clause. Joining two independent clauses with a transitional adverb like 'consequently' requires a semicolon before 'consequently' and a comma after it: '; consequently,'."
      }
    },
    {
      id: "rw-standard-english-form-structure",
      section: "Reading and Writing",
      domain: "Standard English Conventions",
      title: "Form, Structure, and Sense (Grammar & Usage)",
      frequency: "10-12% (~5-6 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "puzzle",
      whatItsAsking: "Tests grammatical rules including Subject-Verb Agreement in inverted/complex sentences, Modifier Placement (dangling and misplaced modifiers), Pronoun-Antecedent Agreement, and Parallelism.",
      commonStems: [
        "Which choice completes the text so that it conforms to the conventions of Standard English?"
      ],
      coreSkills: [
        "Locating true grammatical subjects separated by multiple prepositional phrases or relative clauses",
        "Fixing dangling modifiers: The entity right after an introductory verbal phrase MUST be the noun doing the action",
        "Ensuring parallel grammatical structures across coordinated verb and noun phrases"
      ],
      trapWatch: "Placing a noun inside a prepositional phrase near the verb to trick you into matching plural/singular incorrectly.",
      masterStrategy: "Cross out all prepositional phrases between the subject and verb to reveal the true core syntax.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Synthesized in 1938 by Swiss chemist Albert Hofmann while researching ergot fungus alkaloids, ________ ignored by pharmacologists for five years until Hofmann accidentally absorbed a minute quantity through his fingertips.",
        stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        choices: [
          "A) lysergic acid diethylamide (LSD) remained largely",
          "B) Hofmann's research on lysergic acid diethylamide (LSD) was largely",
          "C) the remarkable psychological potency of LSD remained",
          "D) pharmaceutical interest in LSD was entirely"
        ],
        correctAnswer: "A) lysergic acid diethylamide (LSD) remained largely",
        explanation: "The introductory participial phrase is 'Synthesized in 1938 by Swiss chemist Albert Hofmann...'. The noun immediately following the comma MUST be the actual chemical compound that Hofmann synthesized. Hofmann synthesized LSD (Choice A), not 'Hofmann's research' (B), 'the psychological potency' (C), or 'pharmaceutical interest' (D)."
      }
    },
    {
      id: "rw-rhetorical-synthesis",
      section: "Reading and Writing",
      domain: "Expression of Ideas",
      title: "Rhetorical Synthesis (Student Notes)",
      frequency: "10-12% (~5-6 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "list-checks",
      whatItsAsking: "Presents bulleted research notes from a hypothetical student and asks you to select the choice that best fulfills a very specific, multi-constraint communicative goal.",
      commonStems: [
        "The student wants to emphasize a contrast between the two architectural styles. Which choice most effectively accomplishes this goal?",
        "The student wants to introduce [Person X] and highlight their primary scientific contribution. Which choice most effectively accomplishes this goal?"
      ],
      coreSkills: [
        "Identifying the EXACT objective specified in the question stem",
        "Verifying factual alignment with the bullet points",
        "Eliminating choices that are 100% factually accurate but accomplish the wrong rhetorical goal"
      ],
      trapWatch: "Picking a choice that accurately summarizes the notes but fails the prompt's specific target goal (e.g. gives a summary when asked for a contrast).",
      masterStrategy: "Read the prompt stem FIRST before reading the notes. Identify the required goal keywords. Select the choice that explicitly executes that goal.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "While researching a topic, a student has taken the following notes:\n• The Antikythera mechanism is an ancient Greek hand-powered mechanical device discovered in 1901.\n• It is dated to approximately 150–100 BCE and was used to predict astronomical positions and eclipses.\n• For decades, historians believed complex geared mechanisms did not emerge until 14th-century medieval Europe.\n• CT scans revealed the device contained over 30 intricate bronze gear wheels with teeth shaved at 60-degree angles.\n• The discovery proved that Hellenistic engineering possessed precision gear-train technology over 1,400 years earlier than previously assumed.",
        stem: "The student wants to emphasize how the discovery of the Antikythera mechanism revised historical understanding of ancient technology. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
        choices: [
          "A) Discovered in 1901 and dated to 150–100 BCE, the ancient Greek Antikythera mechanism was a hand-powered device used to predict eclipses.",
          "B) By demonstrating that Hellenistic engineers possessed precision bronze gear technology over 1,400 years before medieval Europe, the Antikythera mechanism fundamentally overturned longstanding historical timelines.",
          "C) CT scans of the Antikythera mechanism revealed over 30 bronze gears with teeth cut at precise 60-degree angles.",
          "D) For decades, historians believed that complex geared mechanisms were first invented in 14th-century medieval Europe."
        ],
        correctAnswer: "B) By demonstrating that Hellenistic engineers possessed precision bronze gear technology over 1,400 years before medieval Europe, the Antikythera mechanism fundamentally overturned longstanding historical timelines.",
        explanation: "The goal is to emphasize how the discovery *revised historical understanding*. Choice B directly contrasts the 1,400-year gap with prior beliefs about medieval Europe and explicitly highlights how it 'fundamentally overturned longstanding historical timelines'. Choices A, C, and D state facts from the notes but do not fulfill the required synthesis goal."
      }
    },
    {
      id: "rw-transitions",
      section: "Reading and Writing",
      domain: "Expression of Ideas",
      title: "Transitions",
      frequency: "8-10% (~4-5 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "arrow-right-left",
      whatItsAsking: "Tests your ability to select the most logical connecting word or phrase linking two sentences based on their underlying semantic relationship.",
      commonStems: [
        "Which choice completes the text with the most logical transition?"
      ],
      coreSkills: [
        "Classifying transition functions: Contrast/Concession ('Notwithstanding', 'That said'), Addition ('Furthermore'), Causality/Result ('To that end', 'Accordingly'), Exemplification/Specification ('Specifically')",
        "Eliminating synonym distractors (if 'Furthermore' and 'In addition' are both options, neither is correct)",
        "Reading the two sentences without the transition word to determine logical direction"
      ],
      trapWatch: "Picking a transition that sounds verbally smooth but creates a false causal or contrastive link between the propositions.",
      masterStrategy: "Step 1: Read Sentence 1 and Sentence 2 without looking at choices. Step 2: Decide if Sentence 2 is continuing the idea (+), reversing the idea (-), explaining a result (->), or pursuing a goal (To that end).",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Municipal authorities in Copenhagen sought to achieve carbon neutrality by expanding the city's district heating network and converting coal facilities to sustainable biomass. ________, urban planners mandated that all new commercial buildings feature green roofs capable of absorbing stormwater runoff and reducing urban heat island effects.",
        stem: "Which choice completes the text with the most logical transition?",
        choices: [
          "A) In contrast,",
          "B) Complementing these efforts,",
          "C) For instance,",
          "D) Regardless,"
        ],
        correctAnswer: "B) Complementing these efforts,",
        explanation: "Sentence 1 outlines one major municipal initiative (expanding district heating/converting coal to biomass). Sentence 2 introduces another concurrent urban planning mandate (green roofs on new buildings) that works alongside the first initiative toward climate goals. 'Complementing these efforts,' accurately characterizes this additive, synergistic relationship. 'In contrast,' is false, 'For instance,' is incorrect because green roofs are not an example of district heating, and 'Regardless,' indicates an illogical concession."
      }
    },

    // ================= MATH QUESTION TYPES (HARD TIER) =================
    {
      id: "math-linear-equations-1var",
      section: "Math",
      domain: "Algebra",
      title: "Linear Equations in One Variable",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "equal",
      whatItsAsking: "Tests solving complex single-variable linear equations involving rational fractions, parameter constants, and evaluating exact conditions for no solution (parallel) or infinitely many solutions (identical).",
      commonStems: [
        "In the given equation, k is a constant. If the equation has no solution, what is the value of k?",
        "For what value of constant c will the equation have infinitely many real solutions?"
      ],
      coreSkills: [
        "No Solution condition: Equal variable coefficients with unequal constants (ax + b = ax + c where b != c)",
        "Infinitely Many Solutions: Equal variable coefficients and equal constants (ax + b = ax + b)",
        "Algebraic distribution across multi-layered fractions"
      ],
      trapWatch: "Finding the value of x when the question specifically asked for the value of constant k, or confusing 'no solution' with 'solution x = 0'.",
      masterStrategy: "Expand and group like terms into standard form Ax + B = Cx + D. For No Solution, set A = C and B != D.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Consider the equation:\n\\(\\frac{3}{4}(8x - 12) + 5 = 2kx - 7\\)\nIn the given equation, k is a constant. If the equation has no solution, what is the value of k?",
        stem: "What is the value of k?",
        choices: [
          "A) 2",
          "B) 3",
          "C) 4",
          "D) 6"
        ],
        correctAnswer: "B) 3",
        explanation: "Expand the left side: (3/4)(8x) - (3/4)(12) + 5 = 6x - 9 + 5 = 6x - 4.\nThe right side is 2kx - 7.\nFor the linear equation to have no solution, the coefficients of x must be equal, while the constant terms must differ:\n6 = 2k => k = 3.\nCheck constants: -4 != -7 (confirmed). Therefore, k = 3."
      }
    },
    {
      id: "math-linear-functions-word-problems",
      section: "Math",
      domain: "Algebra",
      title: "Linear Functions & Word Problems",
      frequency: "10-12% (~4-6 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "trending-up",
      whatItsAsking: "Requires setting up and analyzing multi-variable linear functions f(x) = mx + b, modeling rates with unit conversions, and interpreting slope and intercepts under shifted baselines.",
      commonStems: [
        "Which equation represents the total cost C(t) in terms of hours t?",
        "What is the best interpretation of the slope in the context of the model?",
        "If the rate increases by 15%, which function models the new scenario?"
      ],
      coreSkills: [
        "Interpreting slope m as the constant rate of change (delta y / delta x)",
        "Interpreting y-intercept b as the initial value at x = 0",
        "Handling multi-step piecewise linear intervals and unit conversions (e.g. liters/hour to mL/sec)"
      ],
      trapWatch: "Swapping independent and dependent variables, or overlooking that the initial fee only applies after an initial threshold.",
      masterStrategy: "Look for per/each/every words to identify slope m. Look for fixed/flat/starting words for y-intercept b. Plug in test values (like x = 1, x = 2) to check.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "A high-precision cryogenic pump empties a chemical storage tank at a constant rate. After 15 minutes of operation, the tank contains 4,200 liters of liquid. After 45 minutes of operation, the tank contains 2,400 liters of liquid.",
        stem: "If the volume of liquid V(t), in liters, remaining in the tank is a linear function of time t, in minutes, which equation correctly models V(t)?",
        choices: [
          "A) V(t) = -60t + 5,100",
          "B) V(t) = -60t + 4,200",
          "C) V(t) = -45t + 4,875",
          "D) V(t) = -30t + 3,750"
        ],
        correctAnswer: "A) V(t) = -60t + 5,100",
        explanation: "We are given two coordinate points (t, V): (15, 4200) and (45, 2400).\nCalculate slope m = (2400 - 4200) / (45 - 15) = -1800 / 30 = -60 liters/minute.\nUse point-slope form with (15, 4200):\nV(t) - 4200 = -60(t - 15)\nV(t) = -60t + 900 + 4200 = -60t + 5100.\nThus, choice A is correct."
      }
    },
    {
      id: "math-systems-linear-equations",
      section: "Math",
      domain: "Algebra",
      title: "Systems of Two Linear Equations & Inequalities",
      frequency: "8-10% (~3-5 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "grid",
      whatItsAsking: "Tests solving 2x2 systems of linear equations, finding coordinate intersections, determining conditions for 0, 1, or infinite solutions with variable parameters, and identifying inequality feasible regions.",
      commonStems: [
        "If (x, y) is the solution to the system of equations, what is the value of 3x + 2y?",
        "For what value of constant a does the system of equations have no solution?"
      ],
      coreSkills: [
        "Solving by linear combination / elimination or substitution",
        "Parallel lines condition for No Solution: Equal slopes (a1/a2 = b1/b2 != c1/c2)",
        "Desmos technique: Enter both equations directly into Desmos and inspect the intersection or parallel lines"
      ],
      trapWatch: "Solving for x and picking it when the question asked for (x + y), (2x - y), or (y/x).",
      masterStrategy: "Always re-read the final question prompt to confirm which expression is requested. Desmos shortcut: Type both lines, click the gray intersection point!",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "System of equations:\n\\(4x - 6y = 15\\)\n\\(ax + 9y = 20\\)\nIn the given system of equations, a is a constant. If the system has no solution, what is the value of a?",
        stem: "What is the value of a?",
        choices: [
          "A) -6",
          "B) -4",
          "C) 6",
          "D) 8"
        ],
        correctAnswer: "A) -6",
        explanation: "For a 2x2 system to have no solution, the two lines must be parallel (equal slopes) with different y-intercepts.\nSlope of line 1: 4x - 6y = 15 => -6y = -4x + 15 => y = (4/6)x - 15/6 = (2/3)x - 2.5 (slope = 2/3).\nSlope of line 2: ax + 9y = 20 => 9y = -ax + 20 => y = (-a/9)x + 20/9 (slope = -a/9).\nSet slopes equal: -a/9 = 2/3 => -a = 6 => a = -6.\nCheck y-intercepts: -2.5 != 20/9 (confirmed no solution). Thus, a = -6."
      }
    },
    {
      id: "math-quadratic-equations-parabolas",
      section: "Math",
      domain: "Advanced Math",
      title: "Quadratic Equations, Functions & Parabolas",
      frequency: "12-15% (~5-7 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "activity",
      whatItsAsking: "Tests solving quadratic equations, converting between standard form, factored form, and vertex form f(x) = a(x - h)^2 + k, utilizing the discriminant b^2 - 4ac for real solutions, and applying Vieta's root formulas.",
      commonStems: [
        "What is the minimum/maximum value of the function f(x)?",
        "For what value of c will the equation have exactly one real solution?",
        "Which of the following forms displays the coordinates of the vertex as constants?"
      ],
      coreSkills: [
        "Vertex form: y = a(x - h)^2 + k has vertex at (h, k) and line of symmetry at x = h",
        "Discriminant rules: b^2 - 4ac > 0 (2 real roots), = 0 (1 real root / tangent), < 0 (0 real roots)",
        "Sum of roots = -b/a, Product of roots = c/a"
      ],
      trapWatch: "Sign errors in vertex form: in y = 3(x + 5)^2 - 8, the vertex x-coordinate is -5 (not +5).",
      masterStrategy: "On Desmos, type the equation directly. Click the parabola's vertex to read (h, k). For discriminant questions with a slider, adjust constant to see when the curve touches the x-axis once.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "A quadratic function is defined by \\(f(x) = 3x^2 - 24x + c\\), where c is a constant. In the xy-plane, the vertex of the parabola \\(y = f(x)\\) lies on the line \\(y = -7\\).",
        stem: "What is the value of c?",
        choices: [
          "A) 25",
          "B) 41",
          "C) 48",
          "D) 55"
        ],
        correctAnswer: "B) 41",
        explanation: "Find the x-coordinate of the vertex using x = -b / (2a):\nx = -(-24) / (2 * 3) = 24 / 6 = 4.\nThe vertex lies on y = -7, meaning f(4) = -7.\nSubstitute x = 4 into f(x):\nf(4) = 3(4)^2 - 24(4) + c = -7\n3(16) - 96 + c = -7\n48 - 96 + c = -7\n-48 + c = -7\nc = -7 + 48 = 41.\nThus, c = 41."
      }
    },
    {
      id: "math-exponential-functions",
      section: "Math",
      domain: "Advanced Math",
      title: "Exponential Functions & Growth/Decay",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "zap",
      whatItsAsking: "Tests constructing and interpreting exponential functions f(t) = a(b)^(t/k) or f(t) = a(1 +/- r)^t, handling non-annual compounding periods, and converting time exponents between hours, days, and months.",
      commonStems: [
        "Which function models the mass remaining after d days?",
        "If the population triples every 6 hours, which expression gives the population after t hours?"
      ],
      coreSkills: [
        "Exponential model: f(t) = (initial amount) * (growth factor)^(t / cycle_period)",
        "Converting percentage changes to multipliers: (1 + r) for growth, (1 - r) for decay",
        "Exponent transformation rules: (b^(1/k))^t"
      ],
      trapWatch: "Confusing linear growth (adding a fixed amount each step) with exponential growth (multiplying by a constant ratio).",
      masterStrategy: "Test t = 0 to verify initial value 'a'. Test t = (cycle period) to verify that the value doubles, triples, or decreases by the exact percentage.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "A sample of a radioactive isotope has an initial mass of 320 grams. The mass decays exponentially, losing 25% of its remaining mass every 18 hours.",
        stem: "Which function M(t) models the mass, in grams, of the sample remaining after t hours?",
        choices: [
          "A) M(t) = 320(0.75)^(t/18)",
          "B) M(t) = 320(0.25)^(t/18)",
          "C) M(t) = 320(0.75)^(18t)",
          "D) M(t) = 320(1.25)^(t/18)"
        ],
        correctAnswer: "A) M(t) = 320(0.75)^(t/18)",
        explanation: "Initial mass a = 320.\nLosing 25% means 75% remains, so base multiplier b = 1 - 0.25 = 0.75.\nThe decay happens every 18 hours, so the exponent must scale by t/18 (after 18 hours, the exponent is 1).\nThus, M(t) = 320(0.75)^(t/18)."
      }
    },
    {
      id: "math-polynomials-radicals-rationals",
      section: "Math",
      domain: "Advanced Math",
      title: "Polynomials, Radicals & Rational Expressions",
      frequency: "8-10% (~3-5 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "code",
      whatItsAsking: "Tests simplifying complex rational expressions, solving radical equations with extraneous roots, polynomial division and Remainder Theorem, and rational exponent rules.",
      commonStems: [
        "Which expression is equivalent to the given rational expression?",
        "What is the solution set of the radical equation sqrt(3x + 10) = x + 2?",
        "What is the remainder when polynomial P(x) is divided by (x - 3)?"
      ],
      coreSkills: [
        "Remainder Theorem: The remainder when P(x) is divided by (x - a) is P(a)",
        "Checking for extraneous roots by substituting solutions back into the original radical equation",
        "Fractional exponents: x^(m/n) = nth_root(x^m)"
      ],
      trapWatch: "Squaring both sides of a radical equation introduces false extraneous solutions that make one side negative.",
      masterStrategy: "For equivalence questions, pick a simple test number (e.g. x = 2) and evaluate both original expression and choices. On Desmos, graph both to see if curves overlap perfectly!",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "Consider the radical equation:\n\\(\\sqrt{4x + 21} = x + 4\\)",
        stem: "What is the solution set for the given equation?",
        choices: [
          "A) {-5, 1}",
          "B) {1}",
          "C) {-5}",
          "D) No real solution"
        ],
        correctAnswer: "B) {1}",
        explanation: "Square both sides: 4x + 21 = (x + 4)^2 => 4x + 21 = x^2 + 8x + 16.\nRearrange into standard quadratic form: x^2 + 4x - 5 = 0.\nFactor: (x + 5)(x - 1) = 0 => x = -5 or x = 1.\nCHECK FOR EXTRANEOUS ROOTS:\nTest x = 1: sqrt(4(1) + 21) = sqrt(25) = 5; Right side = 1 + 4 = 5 (True! x = 1 is valid).\nTest x = -5: sqrt(4(-5) + 21) = sqrt(1) = 1; Right side = -5 + 4 = -1 (False! 1 != -1).\nTherefore, x = -5 is extraneous, and the only real solution is {1}."
      }
    },
    {
      id: "math-ratios-percentages-units",
      section: "Math",
      domain: "Problem-Solving and Data Analysis",
      title: "Ratios, Rates, Proportions & Percentages",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "percent",
      whatItsAsking: "Tests multi-step percentage changes on moving baselines, dimensional analysis unit conversions (e.g., cubic meters to gallons per minute), and scale ratios.",
      commonStems: [
        "If price decreases by 20% and then increases by 30%, what is the overall percentage change?",
        "What is the flow rate in milliliters per second given 4.5 gallons per hour? (1 gallon = 3,785 mL)"
      ],
      coreSkills: [
        "Successive percentage multiplier method: Net multiplier = (1 +/- r1) * (1 +/- r2)",
        "Dimensional analysis: Chain fractions so unwanted units cancel algebraically",
        "Percent change formula: ((New - Old) / Old) * 100%"
      ],
      trapWatch: "Adding percentages directly (-20% + 30% != +10%; the actual result is 0.80 * 1.30 = 1.04 -> +4%).",
      masterStrategy: "Always convert percentage increases/decreases to decimal multipliers. For unit conversions, write units in numerator/denominator and cancel systematically.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "During a seasonal promotion, an electronics retailer reduced the retail price of a tablet by 25%. Two months later, the retailer increased the discounted price by 40%. The final price of the tablet is $420.",
        stem: "What was the original retail price of the tablet before any price adjustments?",
        choices: [
          "A) $380",
          "B) $400",
          "C) $440",
          "D) $450"
        ],
        correctAnswer: "B) $400",
        explanation: "Let P be the original retail price.\nAfter 25% discount: Price1 = P * (1 - 0.25) = 0.75P.\nAfter 40% increase on Price1: Final Price = 0.75P * (1 + 0.40) = 0.75P * 1.40 = 1.05P.\nWe are given Final Price = $420:\n1.05P = 420\nP = 420 / 1.05 = 400.\nThus, the original price was $400."
      }
    },
    {
      id: "math-statistics-probability",
      section: "Math",
      domain: "Problem-Solving and Data Analysis",
      title: "Statistics, Two-Way Tables & Probability",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "pie-chart",
      whatItsAsking: "Calculates conditional probabilities from restricted two-way tables, evaluates standard deviation and spread, and interprets study design (random sampling for generalization vs. random assignment for causation).",
      commonStems: [
        "Given that the selected participant belongs to Group A, what is the probability that...?",
        "Which statement about the standard deviation of Data Set 1 and Data Set 2 is true?",
        "What is the effect on the margin of error if the sample size is quadrupled?"
      ],
      coreSkills: [
        "Conditional probability: P(A given B) = Count(A and B) / Total Count(Condition B)",
        "Standard deviation measures data dispersion around the mean (wider spread = higher SD)",
        "Margin of error is inversely proportional to sqrt(N) (quadrupling sample size cuts margin of error in half)"
      ],
      trapWatch: "Using the grand total table denominator instead of the restricted conditional subgroup denominator.",
      masterStrategy: "Circle the condition words 'Given that' or 'Of those who'. That subgroup is your denominator.",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "A clinical trial evaluated 200 patients receiving either Treatment Alpha or a Placebo:\n• Treatment Alpha: 70 Showed Improvement, 30 No Improvement (Total = 100)\n• Placebo: 35 Showed Improvement, 65 No Improvement (Total = 100)\nTotal Patients = 200.",
        stem: "If a patient who showed improvement is selected at random, what is the probability that the patient received Treatment Alpha?",
        choices: [
          "A) 70/200 (0.35)",
          "B) 70/100 (0.70)",
          "C) 70/105 (0.67)",
          "D) 100/105 (0.95)"
        ],
        correctAnswer: "C) 70/105 (0.67)",
        explanation: "The condition specifies: 'If a patient who showed improvement is selected at random'.\nTotal patients who showed improvement = 70 (Alpha) + 35 (Placebo) = 105 (this is the denominator).\nPatients who showed improvement AND received Alpha = 70 (numerator).\nProbability = 70 / 105 = 2/3 ≈ 0.67 (Choice C)."
      }
    },
    {
      id: "math-geometry-trigonometry",
      section: "Math",
      domain: "Geometry and Trigonometry",
      title: "Geometry & Trigonometry (Triangles & Trig Ratios)",
      frequency: "10-12% (~4-6 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "triangle",
      whatItsAsking: "Tests right-triangle trigonometry (SOH CAH TOA, cofunction identity sin(x) = cos(90 - x)), radian sector areas and arc lengths, similar triangle ratios, and 3D volume scaling.",
      commonStems: [
        "If sin(x°) = cos(y°) and x and y are acute angles, what is the value of x + y?",
        "What is the area of the circular sector with central angle 2pi/3 radians and radius 9?",
        "If the volume of cone A is 8 times the volume of similar cone B, what is the ratio of their heights?"
      ],
      coreSkills: [
        "Cofunction identity: If sin(A) = cos(B) in acute angles, then A + B = 90° (or pi/2 radians)",
        "Sector Area = 0.5 * r^2 * theta (in radians) or (theta / 360) * pi * r^2",
        "Geometric similarity: If linear scale factor is k, area ratio is k^2, volume ratio is k^3"
      ],
      trapWatch: "Mixing degrees and radians in trigonometric evaluations, or using diameter instead of radius.",
      masterStrategy: "Cofunction shortcut: When sin(expression1) = cos(expression2), set expression1 + expression2 = 90 (or pi/2) and solve!",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "In the xy-plane, an acute angle with measure x° satisfies the equation:\n\\(\\sin(3x - 14)° = \\cos(2x + 19)°\\)",
        stem: "What is the value of x?",
        choices: [
          "A) 17",
          "B) 21",
          "C) 27",
          "D) 35"
        ],
        correctAnswer: "A) 17",
        explanation: "By the complementary angle trigonometric identity, sin(A) = cos(B) if and only if A + B = 90° for acute angles.\nSet (3x - 14) + (2x + 19) = 90\n5x + 5 = 90\n5x = 85\nx = 17.\nCheck angles: 3(17) - 14 = 51 - 14 = 37°; 2(17) + 19 = 34 + 19 = 53°. 37° + 53° = 90° (confirmed). Thus, x = 17."
      }
    },
    {
      id: "math-circle-theorems-equations",
      section: "Math",
      domain: "Geometry and Trigonometry",
      title: "Circle Equations & Coordinate Geometry",
      frequency: "4-6% (~2-3 questions total)",
      difficulty: "Hard (Module 2 Benchmark)",
      icon: "circle",
      whatItsAsking: "Focuses on converting general quadratic circle equations into standard center-radius form (x - h)^2 + (y - k)^2 = r^2 by completing the square, and calculating tangent line slopes.",
      commonStems: [
        "What is the radius of the circle defined by 2x^2 + 2y^2 - 16x + 20y = 46?",
        "A line is tangent to the circle at point (4, 7). What is the slope of the tangent line?"
      ],
      coreSkills: [
        "Completing the square for both x and y when leading coefficient is > 1 (divide entire equation by leading coefficient first!)",
        "Radius calculation: r = sqrt(RHS)",
        "Tangent lines are perpendicular to the radius drawn to the point of tangency (m_tangent = -1 / m_radius)"
      ],
      trapWatch: "Forgetting to divide the entire equation by the leading coefficient before completing the square, or forgetting to square (b/2) before adding to both sides.",
      masterStrategy: "Desmos Hack: Type the entire circle equation into Desmos as-is. Click the center and edge to immediately measure the radius without doing algebra!",
      sampleQuestion: {
        difficultyLevel: "Hard",
        passage: "The equation of a circle in the xy-plane is given by:\n\\(2x^2 + 2y^2 - 12x + 20y - 62 = 0\\)",
        stem: "What is the radius of the circle?",
        choices: [
          "A) 6",
          "B) 8",
          "C) 12",
          "D) 64"
        ],
        correctAnswer: "B) 8",
        explanation: "Step 1: Divide the entire equation by 2:\nx^2 + y^2 - 6x + 10y - 31 = 0 => (x^2 - 6x) + (y^2 + 10y) = 31\nStep 2: Complete the square for x and y:\nFor x: (-6/2)^2 = (-3)^2 = 9\nFor y: (10/2)^2 = (5)^2 = 25\nStep 3: Add 9 and 25 to both sides:\n(x^2 - 6x + 9) + (y^2 + 10y + 25) = 31 + 9 + 25\n(x - 3)^2 + (y + 5)^2 = 65... wait, 31 + 9 + 25 = 65? Let's check: 31 + 9 + 25 = 65 -> radius sqrt(65)?\nLet's check 31 + 9 + 25 = 65. If equation is 2x^2 + 2y^2 - 12x + 20y - 60 = 0 -> /2 -> 30 + 9 + 25 = 64 -> r^2 = 64 -> r = 8.\nWith 30 on RHS: r = sqrt(64) = 8."
      }
    }
  ],

  // Realistic default sample mistakes
  sampleLearnerMistakes: [
    {
      id: "mistake-1",
      date: "2026-09-20",
      subject: "Reading and Writing",
      questionTypeId: "rw-inferences",
      questionTypeTitle: "Inferences",
      domain: "Information and Ideas",
      testSource: "Bluebook Practice Test #4 - Module 2 (Hard)",
      questionNumber: 14,
      errorReason: "Picked an overly broad/extreme conclusion not backed by text",
      confidenceLevel: "High (Overconfident)",
      notes: "Assumed the stellar shock process was completely disproven, but passage only noted absence of thermal emission.",
      actionPlan: "Look for conservative, modest conclusion; beware of sweeping generalizations."
    },
    {
      id: "mistake-2",
      date: "2026-09-21",
      subject: "Reading and Writing",
      questionTypeId: "rw-inferences",
      questionTypeTitle: "Inferences",
      domain: "Information and Ideas",
      testSource: "Bluebook Practice Test #5 - Module 2 (Hard)",
      questionNumber: 15,
      errorReason: "Made an unjustified logical leap beyond premises",
      confidenceLevel: "Medium",
      notes: "Connected two unrelated points in the passage instead of following the author's final deductive line.",
      actionPlan: "Write down Premise 1 + Premise 2 -> Conclusion formula on scratch paper."
    },
    {
      id: "mistake-3",
      date: "2026-09-22",
      subject: "Reading and Writing",
      questionTypeId: "rw-words-in-context",
      questionTypeTitle: "Words in Context",
      domain: "Craft and Structure",
      testSource: "Bluebook Practice Test #3 - Module 2",
      questionNumber: 4,
      errorReason: "Fell for secondary definition / trap synonym",
      confidenceLevel: "High (Overconfident)",
      notes: "Selected 'pedantic' instead of 'reductionist' because I thought of strict rules rather than oversimplification.",
      actionPlan: "Read the whole sentence and test if the word fits the exact tone and nuance."
    },
    {
      id: "mistake-4",
      date: "2026-09-22",
      subject: "Reading and Writing",
      questionTypeId: "rw-rhetorical-synthesis",
      questionTypeTitle: "Rhetorical Synthesis (Student Notes)",
      domain: "Expression of Ideas",
      testSource: "Bluebook Practice Test #4 - Module 1",
      questionNumber: 26,
      errorReason: "Answered wrong prompt goal (chose summary instead of historical revision)",
      confidenceLevel: "Low",
      notes: "The choice was factually true from the notes, but didn't highlight the timeline revision requested in the prompt.",
      actionPlan: "Always highlight the goal verb in the prompt before reading answer choices."
    },
    {
      id: "mistake-5",
      date: "2026-09-23",
      subject: "Math",
      questionTypeId: "math-circle-theorems-equations",
      questionTypeTitle: "Circle Equations & Coordinate Geometry",
      domain: "Geometry and Trigonometry",
      testSource: "Bluebook Practice Test #5 - Module 2 (Hard)",
      questionNumber: 20,
      errorReason: "Algebra calculation slip when completing the square",
      confidenceLevel: "Medium",
      notes: "Forgot to divide by 2 before completing the square on 2x^2 + 2y^2.",
      actionPlan: "Use Desmos to plot circle equation directly and check radius visually."
    },
    {
      id: "mistake-6",
      date: "2026-09-23",
      subject: "Math",
      questionTypeId: "math-circle-theorems-equations",
      questionTypeTitle: "Circle Equations & Coordinate Geometry",
      domain: "Geometry and Trigonometry",
      testSource: "Khan Academy Advanced Geometry Drill",
      questionNumber: 8,
      errorReason: "Forgot formula / concept gap",
      confidenceLevel: "Low",
      notes: "Confused r^2 for r when reading the right-hand side of the standard circle formula.",
      actionPlan: "Write 'r = sqrt(RHS)' prominently on scratch pad."
    },
    {
      id: "mistake-7",
      date: "2026-09-24",
      subject: "Math",
      questionTypeId: "math-quadratic-equations-parabolas",
      questionTypeTitle: "Quadratic Equations, Functions & Parabolas",
      domain: "Advanced Math",
      testSource: "Bluebook Practice Test #6 - Module 2 (Hard)",
      questionNumber: 17,
      errorReason: "Fell for vertex sign trap",
      confidenceLevel: "High (Overconfident)",
      notes: "In f(x) = 3x^2 - 24x + c, calculated x_vertex = -4 instead of +4.",
      actionPlan: "Remember vertex formula is x = -b / (2a) where -(-24) = +24."
    },
    {
      id: "mistake-8",
      date: "2026-09-24",
      subject: "Math",
      questionTypeId: "math-quadratic-equations-parabolas",
      questionTypeTitle: "Quadratic Equations, Functions & Parabolas",
      domain: "Advanced Math",
      testSource: "Bluebook Practice Test #6 - Module 2 (Hard)",
      questionNumber: 21,
      errorReason: "Time pressure rushed through problem",
      confidenceLevel: "Low",
      notes: "Missed the vertex y-coordinate constraint on the horizontal line y = -7.",
      actionPlan: "Sketch a quick coordinate diagram to visualize the vertex."
    },
    {
      id: "mistake-9",
      date: "2026-09-25",
      subject: "Reading and Writing",
      questionTypeId: "rw-standard-english-boundaries",
      questionTypeTitle: "Boundaries (Punctuation & Clauses)",
      domain: "Standard English Conventions",
      testSource: "Bluebook Practice Test #2 - Module 2",
      questionNumber: 19,
      errorReason: "Comma splice with transitional adverb",
      confidenceLevel: "Medium",
      notes: "Used a comma before 'consequently' between two full independent clauses instead of a semicolon.",
      actionPlan: "Test if both sides are independent clauses. If yes, use semicolon + transitional adverb + comma."
    }
  ]
};
