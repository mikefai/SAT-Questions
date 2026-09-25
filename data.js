// SAT 2026 Comprehensive Blueprint, Question Types & Question Bank Data

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
        operationalQuestions: 46, // 23 operational + 4 pretest per module approx
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
    // ================= READING & WRITING QUESTION TYPES =================
    {
      id: "rw-words-in-context",
      section: "Reading and Writing",
      domain: "Craft and Structure",
      title: "Words in Context",
      frequency: "10-14% (~5-7 questions total)",
      difficulty: "Medium to Hard",
      whatItsAsking: "Tests your ability to determine the precise meaning or best-fitting word for a blank within a short passage (25-150 words), relying strictly on contextual clues rather than rote obscure dictionary memorization.",
      commonStems: [
        "Which choice completes the text with the most logical and precise word or phrase?",
        "As used in the text, what does the word [X] most nearly mean?"
      ],
      coreSkills: [
        "Identifying context clues (contrast words like 'however/despite', support words like 'furthermore', causal cues)",
        "Distinguishing subtle connotations and tone match (neutral vs. negative vs. laudatory)",
        "Avoiding secondary meaning traps where a common definition doesn't fit the specific domain"
      ],
      trapWatch: "Distractor choices often include words that 'sound intelligent' or relate vaguely to the topic, but violate the exact semantic relationship dictated by the sentence's pivot words.",
      masterStrategy: "1. Read the passage and mentally blank out the target word. 2. Predict your own simple synonym based on explicit clues. 3. Match your prediction against the 4 choices.",
      sampleQuestion: {
        passage: "Although the historical documents surrounding the treaty were once considered lost, recent archival excavations have revealed that their disappearance was not absolute; rather, the records had merely been ________ within an unsorted regional repository.",
        stem: "Which choice completes the text with the most logical and precise word or phrase?",
        choices: [
          "A) fabricated",
          "B) sequestered",
          "C) relinquished",
          "D) celebrated"
        ],
        correctAnswer: "B) sequestered",
        explanation: "The passage sets up a contrast: the records were not permanently lost ('not absolute disappearance'), but rather hidden or set apart in an unsorted repository. 'Sequestered' means isolated, hidden, or set apart, which perfectly matches the context. 'Fabricated' (falsified), 'relinquished' (surrendered), and 'celebrated' do not convey being placed away in an unsorted archive."
      }
    },
    {
      id: "rw-text-structure-purpose",
      section: "Reading and Writing",
      domain: "Craft and Structure",
      title: "Text Structure and Purpose",
      frequency: "8-12% (~4-6 questions total)",
      difficulty: "Medium",
      whatItsAsking: "Tests your comprehension of the overall rhetorical function of a text, or how a highlighted sentence/paragraph serves the author's primary goal in constructing their argument.",
      commonStems: [
        "Which choice best describes the main purpose of the text?",
        "Which choice best describes the function of the underlined sentence in the text as a whole?",
        "Which choice best describes the overall structure of the text?"
      ],
      coreSkills: [
        "Distinguishing the overall 'why' (purpose) from merely reciting 'what' happened (content summary)",
        "Mapping rhetorical flow (e.g., Claim -> Evidence -> Counter-argument -> Rebuttal)",
        "Analyzing functional verbs in choices (e.g., 'introduce', 'qualify', 'refute', 'illustrate')"
      ],
      trapWatch: "Choices that accurately summarize a single detail or fact from the passage but fail to state the author's overarching rhetorical purpose.",
      masterStrategy: "Focus on the first and last sentences where pivots occur. Ask yourself: 'Why did the author write this specific sentence? What job is it doing for the paragraph?'",
      sampleQuestion: {
        passage: "In 1928, Alexander Fleming observed that a mold called Penicillium notatum had contaminated a Petri dish of Staphylococcus bacteria, creating a halo where no bacteria grew. Fleming initially published his findings with little fanfare, considering the substance difficult to isolate. It was not until more than a decade later that Howard Florey and Ernst Chain devised methods for mass production, transforming penicillin into a life-saving pharmaceutical.",
        stem: "Which choice best describes the overall structure of the text?",
        choices: [
          "A) It details an unexpected discovery and traces its subsequent development into a practical application.",
          "B) It outlines a scientific debate regarding who deserves primary credit for an invention.",
          "C) It challenges a popular misconception about the timeline of a biological discovery.",
          "D) It compares the experimental methodologies of two competing research teams."
        ],
        correctAnswer: "A) It details an unexpected discovery and traces its subsequent development into a practical application.",
        explanation: "The text starts with Fleming's serendipitous observation of the mold (the unexpected discovery) and then explains how Florey and Chain later figured out mass production to turn it into medicine (development into practical application)."
      }
    },
    {
      id: "rw-cross-text-connections",
      section: "Reading and Writing",
      domain: "Craft and Structure",
      title: "Cross-Text Connections (Dual Passages)",
      frequency: "2-4% (~1-2 questions total)",
      difficulty: "Hard",
      whatItsAsking: "Presents two short paired passages (Text 1 and Text 2) and asks you to evaluate how the author of one text would respond to, critique, or build upon the claims made in the other text.",
      commonStems: [
        "Based on the texts, how would the author of Text 2 most likely respond to the claim in Text 1?",
        "Which choice best describes a relationship between the two texts?"
      ],
      coreSkills: [
        "Summarizing Author 1's central claim vs. Author 2's central stance independently",
        "Pinpointing the exact point of intersection or disagreement (agreement with qualification, outright rebuttal, alternative explanation)",
        "Synthesizing perspectives without bringing external background assumptions"
      ],
      trapWatch: "Choices that misattribute Author 1's opinion to Author 2, or choices that make Author 2 sound way more extreme/hostile than the text actually warrants.",
      masterStrategy: "Write 3-word summaries of Text 1 and Text 2 with a plus (+), minus (-), or equal (=) sign denoting their relationship before looking at the choices.",
      sampleQuestion: {
        passage: "Text 1: Ecologist Mark Vance argues that urban green roofs provide vital biodiversity corridors, significantly increasing local pollinator populations compared to traditional concrete roofs.\n\nText 2: While Dr. Vance observes higher insect counts on green roofs, entomologist Dr. Sarah Lin notes that most of these roofs feature non-native sedum succulents. Lin found that native bee species often avoid these sedum monocultures, suggesting that raw abundance does not necessarily equate to meaningful ecological restoration.",
        stem: "Based on the texts, how would Dr. Lin (Text 2) most likely respond to Vance's claim in Text 1?",
        choices: [
          "A) By arguing that green roofs cause net harm to existing urban flora.",
          "B) By conceding that insect counts rise while questioning the actual ecological benefit for native species.",
          "C) By proposing that traditional concrete roofs provide superior shelter for native pollinators.",
          "D) By disputing the accuracy of Vance's insect counting methodology entirely."
        ],
        correctAnswer: "B) By conceding that insect counts rise while questioning the actual ecological benefit for native species.",
        explanation: "Dr. Lin acknowledges higher counts ('While Dr. Vance observes higher insect counts...') but points out native bees avoid non-native sedum, concluding raw abundance != meaningful ecological restoration. This qualifies Vance's enthusiasm."
      }
    },
    {
      id: "rw-central-ideas-details",
      section: "Reading and Writing",
      domain: "Information and Ideas",
      title: "Central Ideas and Details",
      frequency: "8-12% (~4-6 questions total)",
      difficulty: "Easy to Medium",
      whatItsAsking: "Tests your ability to identify the primary thesis or locate explicit, factual claims directly stated in literary, historical, or scientific texts.",
      commonStems: [
        "Which choice best states the main idea of the text?",
        "According to the text, what is true about [Topic X]?"
      ],
      coreSkills: [
        "Extracting core arguments without getting bogged down in illustrative trivia",
        "Paraphrasing textual evidence accurately",
        "Eliminating answer choices with extreme modifiers ('always', 'never', 'solely') not supported by text"
      ],
      trapWatch: "Answers containing True-in-real-life statements that are NOT actually mentioned or verified anywhere in the short passage.",
      masterStrategy: "Find the explicit line where the claim is stated. If you cannot point your finger at direct textual proof, it is incorrect.",
      sampleQuestion: {
        passage: "Biomimicry in architectural design often draws inspiration from termite mounds. These subterranean builders construct towering mounds with internal chimney networks that maintain constant internal temperatures and ventilation despite scorching exterior desert climates. Architects designing the Eastgate Centre in Zimbabwe replicated these passive cooling chimneys, cutting the building's energy consumption by more than 35% compared to conventionally cooled structures.",
        stem: "Which choice best states the main idea of the text?",
        choices: [
          "A) Termite mounds are the only natural structures capable of inspiring energy-efficient buildings.",
          "B) Architectural designs modeled on termite ventilation systems can significantly reduce energy use.",
          "C) The Eastgate Centre in Zimbabwe is the oldest known example of biomimetic engineering.",
          "D) Desert termites require specialized chimney networks to survive high exterior temperatures."
        ],
        correctAnswer: "B) Architectural designs modeled on termite ventilation systems can significantly reduce energy use.",
        explanation: "The passage introduces biomimicry from termite mounds and proves how the Eastgate Centre successfully replicated this mechanism to reduce energy consumption by over 35%. Choice A is too extreme ('only natural structures'), and C and D focus on peripheral details."
      }
    },
    {
      id: "rw-command-evidence-textual",
      section: "Reading and Writing",
      domain: "Information and Ideas",
      title: "Command of Evidence: Textual",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Medium to Hard",
      whatItsAsking: "Asks you to select the specific quote, hypothesis, or textual finding from the options that provides the strongest support or direct refutation for a given claim or research hypothesis.",
      commonStems: [
        "Which finding, if true, would most directly support the researchers' hypothesis?",
        "Which choice best describes data from the passage that illustrates the author's claim?",
        "Which finding, if true, would most directly weaken the student's conclusion?"
      ],
      coreSkills: [
        "Isolating the precise hypothesis/claim in the prompt stem",
        "Testing each choice as a logical premise to see if it directly reinforces the specified conclusion",
        "Ignoring choices that are plausible but support a slightly different, unstated claim"
      ],
      trapWatch: "Choices that support the general field or topic, but fail to address the specific mechanism or variable posited by the hypothesis.",
      masterStrategy: "Underline the hypothesis sentence in the prompt. Formulate an 'If-Then' statement: If [Hypothesis], then choice must show [Direct evidence of that specific relationship].",
      sampleQuestion: {
        passage: "Marine biologist Dr. Elena Rossi hypothesized that bioluminescent flashes in deep-sea anglerfish do not merely lure prey, but also serve to deter apex predators by startling them in low-light zones.",
        stem: "Which finding, if true, would most directly support Dr. Rossi's hypothesis?",
        choices: [
          "A) Anglerfish consume a wider variety of prey species in deep water than in shallow water.",
          "B) Large predatory sharks abruptly change swimming direction and retreat immediately following sudden light emissions from anglerfish.",
          "C) Bioluminescent anglerfish possess fewer physical defenses like sharp dorsal spines than non-bioluminescent species.",
          "D) The intensity of light emitted by anglerfish increases during warmer seasonal water temperatures."
        ],
        correctAnswer: "B) Large predatory sharks abruptly change swimming direction and retreat immediately following sudden light emissions from anglerfish.",
        explanation: "The hypothesis specifically claims light flashes deter apex predators by startling them. Choice B directly shows apex predators (sharks) retreating when exposed to the light flashes, providing direct empirical support."
      }
    },
    {
      id: "rw-command-evidence-quantitative",
      section: "Reading and Writing",
      domain: "Information and Ideas",
      title: "Command of Evidence: Quantitative (Graphs/Tables)",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Medium",
      whatItsAsking: "Presents a scientific, demographic, or economic chart/table alongside a short passage and asks you to select the choice that accurately reflects data from the graphic to complete the argument.",
      commonStems: [
        "Which choice best uses data from the table to complete the example?",
        "Which choice most effectively uses data from the graph to support the claim?"
      ],
      coreSkills: [
        "Reading table headers, axis labels, units, and legends with high precision",
        "Verifying numerical values against the chart before evaluating argument relevance",
        "Ensuring the choice fulfills BOTH criteria: 1) Data is mathematically accurate, 2) Directly supports the text's claim"
      ],
      trapWatch: "Choices that state true facts from the chart but have no logical bearing on the claim in the paragraph, or choices that twist numbers (e.g. swapping row/column values).",
      masterStrategy: "Always double-check axis units (thousands vs. millions, percentage vs. raw count). Eliminate any choice containing factually incorrect numbers first.",
      sampleQuestion: {
        passage: "Researchers measured the average solar panel efficiency rating across four composite materials: Material Alpha (18.2%), Material Beta (22.5%), Material Gamma (21.1%), and Material Delta (15.4%). The engineers concluded that only materials exceeding a 20% benchmark should advance to commercial production.",
        stem: "Which choice most effectively uses data from the study to support the engineers' conclusion?",
        choices: [
          "A) Material Beta and Material Gamma, with efficiencies of 22.5% and 21.1% respectively, qualify for production.",
          "B) Material Alpha produced the lowest efficiency rating of all tested composites at 18.2%.",
          "C) Material Delta exceeded the 20% efficiency benchmark required for commercial rollout.",
          "D) All four materials achieved higher efficiency ratings than the industry baseline."
        ],
        correctAnswer: "A) Material Beta and Material Gamma, with efficiencies of 22.5% and 21.1% respectively, qualify for production.",
        explanation: "The benchmark is >20%. Only Beta (22.5%) and Gamma (21.1%) exceed 20%. Choice A accurately reflects both the numerical data and the qualification rule."
      }
    },
    {
      id: "rw-inferences",
      section: "Reading and Writing",
      domain: "Information and Ideas",
      title: "Inferences",
      frequency: "8-12% (~4-6 questions total)",
      difficulty: "Hard",
      whatItsAsking: "Requires you to logically complete a text's closing thought or argument by deducing the inevitable consequence based on the strict premises established in the passage.",
      commonStems: [
        "Which choice most logically completes the text?",
        "Based on the text, it can reasonably be inferred that..."
      ],
      coreSkills: [
        "Following strict formal deductive logic (Premise A + Premise B => Inevitable Conclusion C)",
        "Avoiding speculative leaps or introducing unstated real-world variables",
        "Maintaining tone, scope, and direction of the author's final sentence"
      ],
      trapWatch: "Choices that make bold, overly broad generalizations or assume causal links that go one step too far beyond the passage.",
      masterStrategy: "The correct inference on the SAT is conservative and unexciting. Look for the most modest, safest extension of the argument.",
      sampleQuestion: {
        passage: "To produce silk, spiders extrude liquid protein through specialized spinnerets, where shear stress aligns the protein chains into rigid crystalline sheets. Synthetic silk attempts that simply dry liquid protein without applying mechanical shear forces produce fragile, brittle strands. This suggests that the exceptional tensile strength of natural spider silk ________",
        stem: "Which choice most logically completes the text?",
        choices: [
          "A) is primarily a function of the molecular alignment induced during physical extrusion rather than liquid chemical composition alone.",
          "B) cannot ever be replicated by synthetic manufacturing processes in commercial laboratory settings.",
          "C) depends entirely on the ambient humidity of the spider's immediate microenvironment.",
          "D) will degrade quickly if exposed to mechanical shear stress after fiber formation."
        ],
        correctAnswer: "A) is primarily a function of the molecular alignment induced during physical extrusion rather than liquid chemical composition alone.",
        explanation: "The text contrasts natural extrusion (which uses shear stress to align crystals) with synthetic attempts (which have the chemical protein but lack shear force and end up brittle). Hence, the strength depends on the extrusion alignment process, not just the chemical liquid."
      }
    },
    {
      id: "rw-standard-english-boundaries",
      section: "Reading and Writing",
      domain: "Standard English Conventions",
      title: "Boundaries (Punctuation & Clauses)",
      frequency: "14-16% (~7-9 questions total)",
      difficulty: "Medium",
      whatItsAsking: "Tests your mastery of connecting independent and dependent clauses, comma splices, run-on sentences, colons, dashes, semicolons, and parenthetical elements.",
      commonStems: [
        "Which choice completes the text so that it conforms to the conventions of Standard English?"
      ],
      coreSkills: [
        "Identifying independent clauses (Subject + Verb that can stand alone as a sentence)",
        "Correct semicolon / period rules (must separate two independent clauses)",
        "Colon rules (must follow an independent clause; introduces list, explanation, or elaboration)",
        "Paired punctuation for non-essential modifiers (comma-comma, dash-dash, or parenthesis-parenthesis)"
      ],
      trapWatch: "Comma splices (joining two complete sentences with just a comma) and misplaced commas between subjects and their verbs.",
      masterStrategy: "Locate the main subject and verb. Check if the text before the punctuation is a complete sentence. If yes, check what follows to select colon, semicolon, or period.",
      sampleQuestion: {
        passage: "Volcanologists monitoring Mount Rainier rely on an array of advanced ________ tiltmeters, acoustic flow monitors, and satellite radar interferometry to detect magma ascent.",
        stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        choices: [
          "A) instruments:",
          "B) instruments;",
          "C) instruments",
          "D) instruments,"
        ],
        correctAnswer: "A) instruments:",
        explanation: "The clause before the blank is an independent clause ('Volcanologists monitoring Mount Rainier rely on an array of advanced instruments'). It is followed by an explanatory list of those instruments. A colon correctly introduces a list following a full independent clause."
      }
    },
    {
      id: "rw-standard-english-form-structure",
      section: "Reading and Writing",
      domain: "Standard English Conventions",
      title: "Form, Structure, and Sense (Grammar & Usage)",
      frequency: "10-12% (~5-6 questions total)",
      difficulty: "Medium",
      whatItsAsking: "Tests grammatical rules including Subject-Verb Agreement, Verb Tense/Aspect, Pronoun-Antecedent Agreement, Modifier Placement (dangling modifiers), and Parallel Structure.",
      commonStems: [
        "Which choice completes the text so that it conforms to the conventions of Standard English?"
      ],
      coreSkills: [
        "Matching singular/plural verbs to singular/plural subjects despite intervening prepositional phrases",
        "Fixing dangling modifiers: the noun directly following an introductory modifying phrase MUST be the entity performing the action",
        "Ensuring pronoun clarity and consistent verb tense across parallel clauses"
      ],
      trapWatch: "Intervening prepositional phrases (e.g. 'The box of chocolates [is/are]') tricking students into matching the verb with the nearest noun instead of the actual subject.",
      masterStrategy: "Cross out all prepositional phrases between the subject and verb to reveal the true grammatical backbone.",
      sampleQuestion: {
        passage: "Invented by chemist Stephanie Kwolek in 1965, ________ widely utilized in bulletproof vests, aerospace composites, and radial tires due to its high tensile strength-to-weight ratio.",
        stem: "Which choice completes the text so that it conforms to the conventions of Standard English?",
        choices: [
          "A) Kevlar is a heat-resistant synthetic fiber that is",
          "B) industries have adopted Kevlar, a synthetic fiber that is",
          "C) the exceptional durability of Kevlar has become",
          "D) scientists admire Kevlar as a material"
        ],
        correctAnswer: "A) Kevlar is a heat-resistant synthetic fiber that is",
        explanation: "The introductory modifier is 'Invented by chemist Stephanie Kwolek in 1965'. The subject directly after the comma must be what Stephanie Kwolek invented. She invented Kevlar (the material), not 'industries' (B), 'the exceptional durability' (C), or 'scientists' (D)."
      }
    },
    {
      id: "rw-rhetorical-synthesis",
      section: "Reading and Writing",
      domain: "Expression of Ideas",
      title: "Rhetorical Synthesis (Student Notes)",
      frequency: "10-12% (~5-6 questions total)",
      difficulty: "Easy to Medium",
      whatItsAsking: "Presents a set of bulleted research notes taken by a hypothetical student and asks you to select the choice that best fulfills a very specific communicative goal stated in the question prompt.",
      commonStems: [
        "The student wants to emphasize a similarity between the two sculptures. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
        "The student wants to introduce [Person X] and their primary achievement to an audience unfamiliar with them. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
        "The student wants to present the study and its key finding. Which choice most effectively accomplishes this goal?"
      ],
      coreSkills: [
        "Targeting the exact goal in the question stem FIRST (e.g. 'emphasize similarity', 'contrast results', 'introduce to new audience')",
        "Verifying factual alignment with the bullet points",
        "Selecting the choice that accomplishes the goal without unnecessary clutter"
      ],
      trapWatch: "Choices that are 100% factually true according to the notes, but accomplish the WRONG goal (e.g., presenting a contrast when asked for a similarity).",
      masterStrategy: "DO NOT read all bullets first! Read the prompt goal first -> Identify the exact requirement -> Check choices to see which choice directly answers that goal.",
      sampleQuestion: {
        passage: "While researching a topic, a student has taken the following notes:\n• The Apollo 11 mission landed humans on the Moon in July 1969.\n• Neil Armstrong and Buzz Aldrin spent approximately 21.5 hours on the lunar surface.\n• The mission collected 47.5 pounds of lunar rock and soil samples.\n• Geologists analyzed these samples to prove that the Moon has a volcanic history.",
        stem: "The student wants to emphasize the scientific impact of the Apollo 11 mission. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
        choices: [
          "A) In July 1969, Apollo 11 astronauts Neil Armstrong and Buzz Aldrin spent over 21 hours on the lunar surface.",
          "B) By providing 47.5 pounds of lunar samples, Apollo 11 enabled geologists to prove the Moon possessed a volcanic history.",
          "C) Neil Armstrong and Buzz Aldrin collected rock and soil samples during their 1969 landing on the Moon.",
          "D) Apollo 11 was a historic 1969 mission during which astronauts walked on the Moon."
        ],
        correctAnswer: "B) By providing 47.5 pounds of lunar samples, Apollo 11 enabled geologists to prove the Moon possessed a volcanic history.",
        explanation: "The goal is to emphasize the *scientific impact*. Choice B specifically links the collected samples to the scientific discovery that proved the Moon's volcanic history. Other choices just mention mission logistics or time spent."
      }
    },
    {
      id: "rw-transitions",
      section: "Reading and Writing",
      domain: "Expression of Ideas",
      title: "Transitions",
      frequency: "8-10% (~4-5 questions total)",
      difficulty: "Medium",
      whatItsAsking: "Tests your ability to choose the most logical transition word or phrase to connect two sentences or clauses based on their semantic relationship.",
      commonStems: [
        "Which choice completes the text with the most logical transition?"
      ],
      coreSkills: [
        "Classifying relationship categories: Addition/Continuation ('Furthermore', 'Moreover'), Contrast/Reversal ('However', 'Conversely', 'Nevertheless'), Cause/Effect ('Therefore', 'Consequently', 'Thus'), or Exemplification/Restatement ('For instance', 'In other words')",
        "Eliminating synonymous choices (if 'Furthermore' and 'In addition' are both options, usually neither is correct)",
        "Reading the sentence before and the sentence after without the transition word first"
      ],
      trapWatch: "Picking a transition that feels fluent when read aloud but contradicts the underlying logical direction between the claims.",
      masterStrategy: "1. Read Sentence 1 and Sentence 2 without looking at choices. 2. Label the relationship: [Same direction (+)] or [Change of direction (-)] or [Result (->)]. 3. Match category.",
      sampleQuestion: {
        passage: "Advocates of geothermal power highlight that underground thermal reservoirs deliver continuous baseload electricity regardless of weather conditions. ________, unlike intermittent solar and wind installations, geothermal plants require minimal surface land footprint per megawatt generated.",
        stem: "Which choice completes the text with the most logical transition?",
        choices: [
          "A) In contrast,",
          "B) Furthermore,",
          "C) For example,",
          "D) Consequently,"
        ],
        correctAnswer: "B) Furthermore,",
        explanation: "Sentence 1 gives an advantage of geothermal (continuous baseload power regardless of weather). Sentence 2 adds another distinct advantage (minimal land footprint). This is an additive/continuation relationship, so 'Furthermore,' is correct."
      }
    },

    // ================= MATH QUESTION TYPES =================
    {
      id: "math-linear-equations-1var",
      section: "Math",
      domain: "Algebra",
      title: "Linear Equations in One Variable",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Easy to Medium",
      whatItsAsking: "Tests your ability to create, solve, and analyze linear equations in one variable, including determining whether an equation has one solution, no solution, or infinitely many solutions.",
      commonStems: [
        "What value of x satisfies the equation?",
        "For what value of constant k will the equation have infinitely many solutions?",
        "How many solutions does the given equation have?"
      ],
      coreSkills: [
        "Algebraic manipulation (distributing, isolating variables, clearing fractions)",
        "Infinite solutions condition: Coefficients of x and constant terms match on both sides (ax + b = ax + b)",
        "No solution condition: Coefficients of x match but constants differ (ax + b = ax + c where b != c)",
        "One solution condition: Coefficients of x differ"
      ],
      trapWatch: "Forgetting to distribute negative signs across parentheses, or solving for x when the question asked for the value of (2x + 5).",
      masterStrategy: "Always re-read the exact variable expression requested in the final sentence. On Desmos, graph left-hand side as y = LHS and right-hand side as y = RHS; intersection gives x-value!",
      sampleQuestion: {
        passage: "Consider the equation: 4(3x - 5) + 2 = kx - 18\nIn the given equation, k is a constant. If the equation has infinitely many solutions, what is the value of k?",
        stem: "What is the value of k?",
        choices: [
          "A) 3",
          "B) 8",
          "C) 12",
          "D) 24"
        ],
        correctAnswer: "C) 12",
        explanation: "Expand the left side: 12x - 20 + 2 = 12x - 18. The right side is kx - 18. For infinitely many solutions, both sides must be identical. Thus, the coefficient of x must match: k = 12."
      }
    },
    {
      id: "math-linear-functions-word-problems",
      section: "Math",
      domain: "Algebra",
      title: "Linear Functions & Word Problems",
      frequency: "10-12% (~4-6 questions total)",
      difficulty: "Medium",
      whatItsAsking: "Requires modeling real-world scenarios with linear functions (f(x) = mx + b) and interpreting the physical meaning of the slope (rate of change) and y-intercept (initial starting value).",
      commonStems: [
        "Which equation represents the total cost C in terms of hours h?",
        "What is the best interpretation of the number 45 in the context of the model?",
        "According to the model, by how much does the temperature increase for every 1-hour increase?"
      ],
      coreSkills: [
        "Translating verbal rate descriptions into slope m = (delta y) / (delta x)",
        "Identifying fixed flat fees or initial baseline values as the y-intercept b",
        "Understanding unit conversions embedded in rates (e.g. minutes to hours, gallons to liters)"
      ],
      trapWatch: "Swapping independent and dependent variables, or confusing total quantity with the rate of change per unit.",
      masterStrategy: "Look for rate indicator words: 'per', 'each', 'every' -> that is your slope m. Look for one-time words: 'flat fee', 'initial deposit', 'starting at' -> that is your y-intercept b.",
      sampleQuestion: {
        passage: "A solar installation company charges a flat design fee of $650 plus $120 per solar panel installed. The total cost C(p), in dollars, for installing p solar panels is given by C(p) = 120p + 650.",
        stem: "What is the best interpretation of 120 in this context?",
        choices: [
          "A) The total number of solar panels installed by the company.",
          "B) The cost, in dollars, for each additional solar panel installed.",
          "C) The minimum total cost of an installation project.",
          "D) The initial design and permit fee."
        ],
        correctAnswer: "B) The cost, in dollars, for each additional solar panel installed.",
        explanation: "In C(p) = 120p + 650, 120 is the coefficient of p (the slope). It represents the rate of change: the cost in dollars for each additional solar panel installed."
      }
    },
    {
      id: "math-systems-linear-equations",
      section: "Math",
      domain: "Algebra",
      title: "Systems of Two Linear Equations & Inequalities",
      frequency: "8-10% (~3-5 questions total)",
      difficulty: "Medium to Hard",
      whatItsAsking: "Tests solving systems of two linear equations, finding coordinate intersection points (x, y), determining conditions for 0, 1, or infinitely many solutions, and shading inequality feasibility regions.",
      commonStems: [
        "If (x, y) is the solution to the system of equations, what is the value of x + y?",
        "For what value of a does the system of equations have no solution?",
        "Which point (x, y) lies in the solution set of the system of inequalities?"
      ],
      coreSkills: [
        "Solving by substitution, elimination, or matrix coefficients",
        "Parallel lines condition for No Solution: Slopes are equal (m1 = m2) but y-intercepts differ (b1 != b2)",
        "Same line condition for Infinitely Many: Slopes and y-intercepts are identical",
        "Graphing on Desmos to instantly view point of intersection (x, y)"
      ],
      trapWatch: "Finding x and selecting it when the question specifically asked for (x + y), (x - y), or (y/x).",
      masterStrategy: "Desmos Tip: Type both equations directly into Desmos. Click the gray dot at the intersection to get (x, y) immediately!",
      sampleQuestion: {
        passage: "System of equations:\n2x + 3y = 19\n5x - y = 5",
        stem: "If (x, y) is the solution to the system of equations, what is the value of x * y?",
        choices: [
          "A) 6",
          "B) 10",
          "C) 15",
          "D) 20"
        ],
        correctAnswer: "B) 10",
        explanation: "From the second equation: y = 5x - 5. Substitute into the first equation: 2x + 3(5x - 5) = 19 => 2x + 15x - 15 = 19 => 17x = 34 => x = 2. Then y = 5(2) - 5 = 5. The solution is (2, 5). The question asks for x * y = 2 * 5 = 10."
      }
    },
    {
      id: "math-quadratic-equations-parabolas",
      section: "Math",
      domain: "Advanced Math",
      title: "Quadratic Equations, Functions & Parabolas",
      frequency: "12-15% (~5-7 questions total)",
      difficulty: "Medium to Hard",
      whatItsAsking: "Tests solving quadratic equations (factoring, quadratic formula), interpreting vertex form f(x) = a(x-h)^2 + k (minimum/maximum value), analyzing the discriminant (b^2 - 4ac) for number of real roots, and graph transformations.",
      commonStems: [
        "What is the minimum value of the function f(x)?",
        "For what value of c will the equation have exactly one real solution?",
        "Which of the following forms displays the coordinates of the vertex as constants?"
      ],
      coreSkills: [
        "Vertex form: y = a(x - h)^2 + k has vertex at (h, k)",
        "Discriminant rules: b^2 - 4ac > 0 (2 real solutions), = 0 (1 real solution), < 0 (no real solutions)",
        "Factored form: y = a(x - r1)(x - r2) displaying x-intercepts as constants",
        "Sum of roots = -b/a, Product of roots = c/a"
      ],
      trapWatch: "Sign errors in vertex form: in y = 2(x - 4)^2 + 7, the vertex x-coordinate is +4, not -4.",
      masterStrategy: "On Desmos, type the quadratic equation. Click the vertex apex to find max/min values, and click x-intercepts for roots.",
      sampleQuestion: {
        passage: "A quadratic function is defined by f(x) = 2x^2 - 12x + 23.",
        stem: "What is the minimum value of the function?",
        choices: [
          "A) 3",
          "B) 5",
          "C) 6",
          "D) 23"
        ],
        correctAnswer: "B) 5",
        explanation: "The x-coordinate of the vertex is x = -b / (2a) = -(-12) / (2 * 2) = 12 / 4 = 3. Substitute x = 3 into f(x): f(3) = 2(3)^2 - 12(3) + 23 = 2(9) - 36 + 23 = 18 - 36 + 23 = 5. The minimum value (the y-value of the vertex) is 5."
      }
    },
    {
      id: "math-exponential-functions",
      section: "Math",
      domain: "Advanced Math",
      title: "Exponential Functions & Growth/Decay",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Medium",
      whatItsAsking: "Models exponential growth and decay scenarios f(x) = a(b)^x or f(x) = a(1 +/- r)^t, interpreting initial amounts, percentage growth/decay rates, and time exponent scalings (e.g. doubling every 3 years -> t/3).",
      commonStems: [
        "Which function models the population P(t) after t years?",
        "By what percentage does the value decrease each year?",
        "If a bacterial culture triples every 4 hours, which expression gives the population after h hours?"
      ],
      coreSkills: [
        "Exponential formula: y = a(1 + r)^t for growth, y = a(1 - r)^t for decay",
        "Converting percentage changes to base multipliers (e.g., 8% decrease -> base is 1 - 0.08 = 0.92)",
        "Handling adjusted compounding periods (e.g. t/k exponent for doubling every k time units)"
      ],
      trapWatch: "Confusing linear growth (constant amount added each period) with exponential growth (constant percentage multiplied each period).",
      masterStrategy: "Identify the starting amount 'a' at t=0. Check if base b > 1 (growth) or 0 < b < 1 (decay). Percentage rate r = |b - 1| * 100%.",
      sampleQuestion: {
        passage: "An antique painting was purchased for $4,500. Its estimated market value increases by 7% each year after purchase.",
        stem: "Which function V(t) represents the estimated value of the painting t years after purchase?",
        choices: [
          "A) V(t) = 4,500(0.07)^t",
          "B) V(t) = 4,500(1.07)^t",
          "C) V(t) = 4,500 + 1.07t",
          "D) V(t) = 4,500(0.93)^t"
        ],
        correctAnswer: "B) V(t) = 4,500(1.07)^t",
        explanation: "The standard exponential growth model is V(t) = a(1 + r)^t. With initial value a = 4,500 and annual growth rate r = 0.07 (7%), the base multiplier is (1 + 0.07) = 1.07. Thus, V(t) = 4,500(1.07)^t."
      }
    },
    {
      id: "math-polynomials-radicals-rationals",
      section: "Math",
      domain: "Advanced Math",
      title: "Polynomials, Radicals & Rational Expressions",
      frequency: "8-10% (~3-5 questions total)",
      difficulty: "Hard",
      whatItsAsking: "Tests simplifying rational expressions, radical equations with potential extraneous solutions, polynomial division / remainder theorem, and exponent rules (fractional exponents).",
      commonStems: [
        "Which expression is equivalent to the given expression?",
        "What is the solution set for the radical equation sqrt(2x + 6) = x - 1?",
        "What is the remainder when polynomial P(x) is divided by (x - 2)?"
      ],
      coreSkills: [
        "Fractional exponents: x^(m/n) = nth_root(x^m)",
        "Checking for extraneous solutions in radical equations (always plug answers back into original equation)",
        "Remainder theorem: P(a) is the remainder when P(x) is divided by (x - a)",
        "Factoring higher-degree polynomials by grouping or substitution"
      ],
      trapWatch: "Forgetting that squaring both sides of a radical equation can introduce false 'extraneous' solutions that do not satisfy the original equation.",
      masterStrategy: "Testing values method: Pick a simple test number (like x = 2 or x = 3), evaluate the original expression, and see which answer choice yields the exact same numeric value!",
      sampleQuestion: {
        passage: "Which expression is equivalent to (x^(3/4)) * (x^(1/2)) for all positive values of x?",
        stem: "Select the equivalent expression:",
        choices: [
          "A) x^(3/8)",
          "B) x^(5/4)",
          "C) x^(3/6)",
          "D) x^(2/3)"
        ],
        correctAnswer: "B) x^(5/4)",
        explanation: "When multiplying terms with the same base, add the exponents: 3/4 + 1/2 = 3/4 + 2/4 = 5/4. Therefore, the equivalent expression is x^(5/4)."
      }
    },
    {
      id: "math-ratios-percentages-units",
      section: "Math",
      domain: "Problem-Solving and Data Analysis",
      title: "Ratios, Rates, Proportions & Percentages",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Easy to Medium",
      whatItsAsking: "Tests multi-step percentage changes (successive discounts, percent increase/decrease), unit conversions (dimensional analysis), scale factors, and direct/inverse variation.",
      commonStems: [
        "If the original price was decreased by 20% and then increased by 15%, what is the final price as a percent of original?",
        "What is the speed in meters per second given 65 miles per hour? (1 mile = 1,609 meters)",
        "The ratio of copper to zinc in an alloy is 3:5. If 40 kg of zinc is used, how much copper is needed?"
      ],
      coreSkills: [
        "Percentage Change Formula: % Change = ((New - Old) / Old) * 100%",
        "Successive percentage multiplier method: (1 - 0.20) * (1 + 0.15) = 0.80 * 1.15 = 0.92 (8% net decrease, NOT 5% decrease!)",
        "Setting up unit conversion fractions so unwanted units cancel algebraically"
      ],
      trapWatch: "Adding percentages directly (e.g. -20% + 15% != -5%), or calculating percent of wrong base number.",
      masterStrategy: "Always use decimal multipliers for percentages. For ratio problems, use the multiplier 'x' method: 3x + 5x = total.",
      sampleQuestion: {
        passage: "A jacket originally priced at $150 is placed on sale for 30% off. During a clearance event, an additional 20% discount is applied to the sale price.",
        stem: "What is the final clearance price of the jacket?",
        choices: [
          "A) $75",
          "B) $84",
          "C) $90",
          "D) $105"
        ],
        correctAnswer: "B) $84",
        explanation: "Initial price = $150. After 30% discount: 150 * (1 - 0.30) = 150 * 0.70 = $105. After additional 20% discount on the sale price: 105 * (1 - 0.20) = 105 * 0.80 = $84. (Note: A combined 50% discount would give $75, which is a classic trap!)."
      }
    },
    {
      id: "math-statistics-probability",
      section: "Math",
      domain: "Problem-Solving and Data Analysis",
      title: "Statistics, Two-Way Tables & Probability",
      frequency: "6-8% (~3-4 questions total)",
      difficulty: "Medium",
      whatItsAsking: "Calculates conditional probabilities from two-way tables, analyzes center and spread (mean, median, range, standard deviation), and evaluates sampling methods and margin of error in observational studies vs. experiments.",
      commonStems: [
        "If a participant who preferred Brand A is selected at random, what is the probability they are under 30?",
        "Which statement about the standard deviation of Data Set A and Data Set B is true?",
        "Which conclusion is best supported by the randomized controlled study?"
      ],
      coreSkills: [
        "Conditional probability: Probability of A GIVEN B = (Count of A and B) / (Total count of condition B)",
        "Standard deviation measures data spread/dispersion from the mean: clustered data = smaller SD, spread out data = larger SD",
        "Generalizing study results: Random selection allows generalization to the population; Random assignment allows causal conclusions (cause-and-effect)"
      ],
      trapWatch: "Using the grand total table denominator instead of the restricted conditional subgroup denominator when the question specifies 'Given that / If a person who...'.",
      masterStrategy: "Circle the condition word 'Given that' or 'Of those who...'. The group that follows defines your denominator!",
      sampleQuestion: {
        passage: "A survey of 100 students recorded their preferred study venue:\n• Group 1 (Freshmen): 20 Library, 15 Dorm\n• Group 2 (Seniors): 40 Library, 25 Dorm\nTotal Library = 60, Total Dorm = 40, Total Students = 100.",
        stem: "If a student who prefers the Library is selected at random, what is the probability that the student is a Freshman?",
        choices: [
          "A) 20/100 (0.20)",
          "B) 20/60 (0.33)",
          "C) 20/35 (0.57)",
          "D) 60/100 (0.60)"
        ],
        correctAnswer: "B) 20/60 (0.33)",
        explanation: "The selection is restricted to 'a student who prefers the Library'. Total library students = 20 + 40 = 60 (this is the denominator). Freshmen who prefer library = 20 (numerator). Probability = 20 / 60 = 1/3 ~ 0.33."
      }
    },
    {
      id: "math-geometry-trigonometry",
      section: "Math",
      domain: "Geometry and Trigonometry",
      title: "Geometry & Trigonometry (Triangles & Circles)",
      frequency: "10-12% (~4-6 questions total)",
      difficulty: "Medium to Hard",
      whatItsAsking: "Tests circle equations (x - h)^2 + (y - k)^2 = r^2, arc length & sector area formulas, right-triangle trigonometry (SOH CAH TOA, complementary angle identity sin(x) = cos(90 - x)), and similar triangle proportions.",
      commonStems: [
        "What is the radius of the circle given by the equation x^2 + y^2 - 6x + 8y = 0?",
        "If sin(x°) = cos(y°) and x and y are acute angles, what is the value of x + y?",
        "What is the volume, in cubic centimeters, of the right circular cone?"
      ],
      coreSkills: [
        "Completing the square to convert circle equations into standard center-radius form",
        "Complementary Angle Theorem: sin(x°) = cos(90° - x°), so if sin(A) = cos(B), then A + B = 90° (or pi/2 radians)",
        "Arc Length = (theta / 360) * 2*pi*r or s = r*theta (when theta is in radians)",
        "Sector Area = (theta / 360) * pi*r^2 or A = 0.5 * r^2 * theta (in radians)"
      ],
      trapWatch: "Mixing degrees and radians in trigonometric computations, or mistaking the diameter for the radius in circle and volume formulas.",
      masterStrategy: "For circle equations: write in Desmos to immediately see the circle and measure radius! Reference the formula sheet at the beginning of the Math module for area and volume formulas.",
      sampleQuestion: {
        passage: "In a right triangle ABC, angle C is 90°. If sin(A) = 5/13, what is the value of cos(B)?",
        stem: "What is the value of cos(B)?",
        choices: [
          "A) 5/13",
          "B) 12/13",
          "C) 5/12",
          "D) 13/5"
        ],
        correctAnswer: "A) 5/13",
        explanation: "In any right triangle where C is 90°, acute angles A and B are complementary (A + B = 90°). By the cofunction trigonometric identity, sin(A) = cos(90° - A) = cos(B). Therefore, cos(B) = sin(A) = 5/13."
      }
    },
    {
      id: "math-circle-theorems-equations",
      section: "Math",
      domain: "Geometry and Trigonometry",
      title: "Circle Equations & Coordinate Geometry",
      frequency: "4-6% (~2-3 questions total)",
      difficulty: "Hard",
      whatItsAsking: "Focuses on finding circle centers, radii, tangent lines to circles, and intercepted arc angle theorems on the xy-plane.",
      commonStems: [
        "What is the radius of the circle defined by x^2 - 10x + y^2 + 6y = 15?",
        "A line is tangent to a circle at point (3, 4). What is the slope of the tangent line?"
      ],
      coreSkills: [
        "Completing the square for both x and y terms: (x - h)^2 + (y - k)^2 = r^2",
        "Tangent lines are perpendicular to the radius drawn to the point of tangency (negative reciprocal slope)"
      ],
      trapWatch: "Forgetting to add the squared terms ((b/2)^2) to the right-hand side of the equation when completing the square.",
      masterStrategy: "Graph the circle equation in Desmos. Count grid units from center to perimeter to find radius r!",
      sampleQuestion: {
        passage: "The equation of a circle in the xy-plane is given by:\nx^2 + y^2 + 8x - 14y + 40 = 0",
        stem: "What is the radius of the circle?",
        choices: [
          "A) 5",
          "B) 25",
          "C) sqrt(40)",
          "D) 7"
        ],
        correctAnswer: "A) 5",
        explanation: "Group x and y terms: (x^2 + 8x) + (y^2 - 14y) = -40. Complete the square: (8/2)^2 = 16, and (-14/2)^2 = 49. Add both to both sides: (x^2 + 8x + 16) + (y^2 - 14y + 49) = -40 + 16 + 49 => (x + 4)^2 + (y - 7)^2 = 25. Since r^2 = 25, the radius is r = sqrt(25) = 5."
      }
    }
  ],

  // Sample initial learner mistakes for immediate testing and demonstration
  sampleLearnerMistakes: [
    {
      id: "mistake-1",
      date: "2026-09-20",
      subject: "Reading and Writing",
      questionTypeId: "rw-inferences",
      questionTypeTitle: "Inferences",
      domain: "Information and Ideas",
      testSource: "Bluebook Practice Test #4 - Module 2",
      questionNumber: 14,
      errorReason: "Picked an overly broad/extreme conclusion not backed by text",
      confidenceLevel: "High (Overconfident)",
      notes: "Assumed the spider silk process was impossible in labs, but passage only said un-sheared attempts failed.",
      actionPlan: "Look for conservative, modest conclusion; beware of 'never/always' choices."
    },
    {
      id: "mistake-2",
      date: "2026-09-21",
      subject: "Reading and Writing",
      questionTypeId: "rw-inferences",
      questionTypeTitle: "Inferences",
      domain: "Information and Ideas",
      testSource: "Bluebook Practice Test #5 - Module 2",
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
      testSource: "Bluebook Practice Test #3 - Module 1",
      questionNumber: 4,
      errorReason: "Fell for secondary definition / trap synonym",
      confidenceLevel: "High (Overconfident)",
      notes: "Selected 'qualified' thinking of credentials, but text needed 'qualified' meaning 'limited/moderated'.",
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
      errorReason: "Answered wrong prompt goal (chose summary instead of similarity)",
      confidenceLevel: "Low",
      notes: "The choice was factually true from the notes, but didn't highlight the similarity requested in the prompt.",
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
      notes: "Forgot to square (b/2) before adding to the RHS, resulting in r^2 error.",
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
      notes: "Confused diameter for radius when answering the final grid-in box.",
      actionPlan: "Write 'r =' prominently on scratch pad."
    },
    {
      id: "mistake-7",
      date: "2026-09-24",
      subject: "Math",
      questionTypeId: "math-quadratic-equations-parabolas",
      questionTypeTitle: "Quadratic Equations, Functions & Parabolas",
      domain: "Advanced Math",
      testSource: "Bluebook Practice Test #6 - Module 2",
      questionNumber: 17,
      errorReason: "Fell for vertex sign trap",
      confidenceLevel: "High (Overconfident)",
      notes: "In y = 3(x + 4)^2 - 5, picked x = +4 instead of x = -4.",
      actionPlan: "Remember standard form is (x - h)^2 where h is the x-coordinate."
    },
    {
      id: "mistake-8",
      date: "2026-09-24",
      subject: "Math",
      questionTypeId: "math-quadratic-equations-parabolas",
      questionTypeTitle: "Quadratic Equations, Functions & Parabolas",
      domain: "Advanced Math",
      testSource: "Bluebook Practice Test #6 - Module 2",
      questionNumber: 21,
      errorReason: "Time pressure rushed through problem",
      confidenceLevel: "Low",
      notes: "Missed the discriminant condition b^2 - 4ac = 0 for 1 real solution.",
      actionPlan: "Write down discriminant checklist for quadratic solution count questions."
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
      errorReason: "Comma splice / semicolon confusion",
      confidenceLevel: "Medium",
      notes: "Used a comma to join two independent clauses without a coordinating conjunction (FANBOYS).",
      actionPlan: "Test if both sides have Subject + Verb. If both can stand alone, use semicolon, period, or comma + FANBOYS."
    }
  ]
};
