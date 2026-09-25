import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from test11_dataset_builder import build_test11_dataset

def create_styled_excel():
    questions = build_test11_dataset()
    wb = openpyxl.Workbook()

    # Styling Constants
    NAVY_HEADER_FILL = PatternFill(start_color="1E293B", end_color="1E293B", fill_type="solid")
    BLUE_HEADER_FILL = PatternFill(start_color="1D4ED8", end_color="1D4ED8", fill_type="solid")
    PURPLE_HEADER_FILL = PatternFill(start_color="7E22CE", end_color="7E22CE", fill_type="solid")
    EMERALD_HEADER_FILL = PatternFill(start_color="047857", end_color="047857", fill_type="solid")
    
    ALT_ROW_FILL = PatternFill(start_color="F8FAFC", end_color="F8FAFC", fill_type="solid")
    WHITE_FILL = PatternFill(start_color="FFFFFF", end_color="FFFFFF", fill_type="solid")
    
    # Domain color fills (Subtle pastel for badges/cells)
    DOMAIN_FILLS = {
        "Craft and Structure": PatternFill(start_color="EFF6FF", end_color="EFF6FF", fill_type="solid"),
        "Information and Ideas": PatternFill(start_color="EEF2FF", end_color="EEF2FF", fill_type="solid"),
        "Standard English Conventions": PatternFill(start_color="ECFEFF", end_color="ECFEFF", fill_type="solid"),
        "Expression of Ideas": PatternFill(start_color="F0FDFA", end_color="F0FDFA", fill_type="solid"),
        "Algebra": PatternFill(start_color="FAF5FF", end_color="FAF5FF", fill_type="solid"),
        "Advanced Math": PatternFill(start_color="FDF4FF", end_color="FDF4FF", fill_type="solid"),
        "Problem-Solving and Data Analysis": PatternFill(start_color="FDF2F8", end_color="FDF2F8", fill_type="solid"),
        "Geometry and Trigonometry": PatternFill(start_color="FFF1F2", end_color="FFF1F2", fill_type="solid")
    }

    HEADER_FONT = Font(name="Calibri", size=11, bold=True, color="FFFFFF")
    TITLE_FONT = Font(name="Calibri", size=16, bold=True, color="0F172A")
    SUBTITLE_FONT = Font(name="Calibri", size=10, italic=True, color="64748B")
    REGULAR_FONT = Font(name="Calibri", size=10, color="1E293B")
    BOLD_FONT = Font(name="Calibri", size=10, bold=True, color="0F172A")
    KPI_NUM_FONT = Font(name="Calibri", size=20, bold=True, color="1D4ED8")
    KPI_LABEL_FONT = Font(name="Calibri", size=9, bold=True, color="64748B")

    THIN_BORDER_SIDE = Side(style='thin', color='E2E8F0')
    GRID_BORDER = Border(left=THIN_BORDER_SIDE, right=THIN_BORDER_SIDE, top=THIN_BORDER_SIDE, bottom=THIN_BORDER_SIDE)
    DOUBLE_BOTTOM_SIDE = Side(style='double', color='0F172A')
    TOTAL_BORDER = Border(top=THIN_BORDER_SIDE, bottom=DOUBLE_BOTTOM_SIDE)

    # -------------------------------------------------------------
    # SHEET 1: ALL QUESTIONS MASTER LIST
    # -------------------------------------------------------------
    ws_all = wb.active
    ws_all.title = "All Questions (108 Qs)"
    ws_all.views.sheetView[0].showGridLines = True

    # Title Block
    ws_all.merge_cells("A1:J1")
    ws_all["A1"] = "Digital SAT Practice Test 11 — Complete Question-by-Question Type Breakdown"
    ws_all["A1"].font = TITLE_FONT

    ws_all.merge_cells("A2:J2")
    ws_all["A2"] = "Official College Board Specification • Reading & Writing (54 Qs) + Math (54 Qs) • Full Question Types, Stems, and Tested Skills"
    ws_all["A2"].font = SUBTITLE_FONT

    headers = [
        "Question ID", "Section", "Module", "Q#", "Domain", 
        "Question Type / Category", "Format", "Exact Question Stem / Prompt", 
        "What It's Asking (Deep-Dive Analysis)", "Tested Skills & Core Concepts"
    ]

    # Write Headers at row 4
    for col_idx, h in enumerate(headers, 1):
        cell = ws_all.cell(row=4, column=col_idx, value=h)
        cell.fill = NAVY_HEADER_FILL
        cell.font = HEADER_FONT
        cell.alignment = Alignment(horizontal="center" if col_idx in [1, 3, 4, 7] else "left", vertical="center", wrap_text=True)

    ws_all.row_dimensions[4].height = 28

    for row_idx, q in enumerate(questions, 5):
        fill = ALT_ROW_FILL if row_idx % 2 == 0 else WHITE_FILL
        
        row_values = [
            q["id"], q["section"], q["module"], q["q_num"], q["domain"],
            q["type"], q["format"], q["stem"], q["what_asking"], q["skills"]
        ]

        for col_idx, val in enumerate(row_values, 1):
            cell = ws_all.cell(row=row_idx, column=col_idx, value=val)
            cell.font = BOLD_FONT if col_idx in [1, 6] else REGULAR_FONT
            cell.border = GRID_BORDER
            cell.fill = fill
            cell.alignment = Alignment(
                horizontal="center" if col_idx in [1, 3, 4, 7] else "left",
                vertical="top",
                wrap_text=True
            )
        ws_all.row_dimensions[row_idx].height = 42

    # Column Widths for ws_all
    col_widths = {
        1: 14,  # Question ID
        2: 20,  # Section
        3: 12,  # Module
        4: 8,   # Q#
        5: 28,  # Domain
        6: 34,  # Question Type
        7: 24,  # Format
        8: 48,  # Stem
        9: 55,  # What It's Asking
        10: 50  # Tested Skills
    }
    for col_idx, width in col_widths.items():
        ws_all.column_dimensions[get_column_letter(col_idx)].width = width

    # -------------------------------------------------------------
    # SHEET 2: QUESTION TYPE SUMMARY & COUNTS
    # -------------------------------------------------------------
    ws_sum = wb.create_sheet(title="Question Type Counts & Summary")
    ws_sum.views.sheetView[0].showGridLines = True

    ws_sum.merge_cells("A1:G1")
    ws_sum["A1"] = "SAT Practice Test 11 — Question Type Frequency & Domain Matrix"
    ws_sum["A1"].font = TITLE_FONT

    ws_sum.merge_cells("A2:G2")
    ws_sum["A2"] = "Aggregated breakdown of questions by domain and question type across Module 1 and Module 2"
    ws_sum["A2"].font = SUBTITLE_FONT

    # KPI Blocks at Row 4-6
    kpis = [
        ("Total Questions", "108", "A4:B5"),
        ("Reading & Writing", "54 Qs", "C4:C5"),
        ("Math", "54 Qs", "D4:D5"),
        ("Multiple Choice", "96 (88.9%)", "E4:F5"),
        ("Student-Produced (SPR)", "12 (11.1%)", "G4:G5")
    ]
    for label, val, rng in kpis:
        start_cell = rng.split(":")[0]
        ws_sum.merge_cells(rng)
        ws_sum[start_cell] = f"{val}\n{label}"
        ws_sum[start_cell].font = KPI_NUM_FONT
        ws_sum[start_cell].fill = PatternFill(start_color="F1F5F9", end_color="F1F5F9", fill_type="solid")
        ws_sum[start_cell].alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)

    # Compute Summary Frequency Data
    type_counts = {}
    for q in questions:
        key = (q["section"], q["domain"], q["type"])
        if key not in type_counts:
            type_counts[key] = {"mod1": 0, "mod2": 0, "total": 0}
        if q["module"] == "Module 1":
            type_counts[key]["mod1"] += 1
        else:
            type_counts[key]["mod2"] += 1
        type_counts[key]["total"] += 1

    sum_headers = [
        "Section", "Domain", "Question Type / Category", 
        "Mod 1 Count", "Mod 2 Count", "Total Count in Test 11", "% of Section", "% of Entire Test"
    ]

    for col_idx, h in enumerate(sum_headers, 1):
        cell = ws_sum.cell(row=8, column=col_idx, value=h)
        cell.fill = NAVY_HEADER_FILL
        cell.font = HEADER_FONT
        cell.alignment = Alignment(horizontal="center" if col_idx in [4, 5, 6, 7, 8] else "left", vertical="center", wrap_text=True)
    ws_sum.row_dimensions[8].height = 26

    current_row = 9
    for (sec, dom, qtype), counts in sorted(type_counts.items(), key=lambda x: (x[0][0], x[0][1], -x[1]["total"])):
        fill = DOMAIN_FILLS.get(dom, WHITE_FILL)
        pct_sec = (counts["total"] / 54.0) * 100
        pct_tot = (counts["total"] / 108.0) * 100

        ws_sum.cell(row=current_row, column=1, value=sec).font = BOLD_FONT
        ws_sum.cell(row=current_row, column=2, value=dom).font = REGULAR_FONT
        ws_sum.cell(row=current_row, column=3, value=qtype).font = BOLD_FONT
        
        c4 = ws_sum.cell(row=current_row, column=4, value=counts["mod1"])
        c5 = ws_sum.cell(row=current_row, column=5, value=counts["mod2"])
        c6 = ws_sum.cell(row=current_row, column=6, value=counts["total"])
        c7 = ws_sum.cell(row=current_row, column=7, value=f"{pct_sec:.1f}%")
        c8 = ws_sum.cell(row=current_row, column=8, value=f"{pct_tot:.1f}%")

        for col_idx in range(1, 9):
            c = ws_sum.cell(row=current_row, column=col_idx)
            c.border = GRID_BORDER
            c.fill = fill
            if col_idx in [4, 5, 6, 7, 8]:
                c.alignment = Alignment(horizontal="center", vertical="center")
                c.font = BOLD_FONT if col_idx == 6 else REGULAR_FONT

        ws_sum.row_dimensions[current_row].height = 22
        current_row += 1

    # Total Row
    ws_sum.cell(row=current_row, column=1, value="TOTALS").font = Font(name="Calibri", size=11, bold=True)
    ws_sum.cell(row=current_row, column=4, value=54).font = Font(name="Calibri", size=11, bold=True)
    ws_sum.cell(row=current_row, column=5, value=54).font = Font(name="Calibri", size=11, bold=True)
    ws_sum.cell(row=current_row, column=6, value=108).font = Font(name="Calibri", size=11, bold=True)
    ws_sum.cell(row=current_row, column=7, value="100.0%").font = Font(name="Calibri", size=11, bold=True)
    ws_sum.cell(row=current_row, column=8, value="100.0%").font = Font(name="Calibri", size=11, bold=True)
    for col_idx in range(1, 9):
        c = ws_sum.cell(row=current_row, column=col_idx)
        c.border = TOTAL_BORDER
        c.fill = PatternFill(start_color="E2E8F0", end_color="E2E8F0", fill_type="solid")
        if col_idx in [4, 5, 6, 7, 8]:
            c.alignment = Alignment(horizontal="center", vertical="center")

    sum_widths = {1: 22, 2: 30, 3: 38, 4: 14, 5: 14, 6: 18, 7: 15, 8: 15}
    for col_idx, width in sum_widths.items():
        ws_sum.column_dimensions[get_column_letter(col_idx)].width = width

    # -------------------------------------------------------------
    # SHEET 3: READING & WRITING SPECIFIC (54 Qs)
    # -------------------------------------------------------------
    ws_rw = wb.create_sheet(title="Reading & Writing (54 Qs)")
    ws_rw.views.sheetView[0].showGridLines = True

    ws_rw.merge_cells("A1:I1")
    ws_rw["A1"] = "Digital SAT Practice Test 11 — Reading & Writing Section Breakdown"
    ws_rw["A1"].font = TITLE_FONT

    ws_rw.merge_cells("A2:I2")
    ws_rw["A2"] = "54 Total Questions (Module 1: 27 Qs, Module 2: 27 Qs) • Craft & Structure, Info & Ideas, Conventions, Expression"
    ws_rw["A2"].font = SUBTITLE_FONT

    rw_headers = [
        "Question ID", "Module", "Q#", "Domain", "Question Type / Category", 
        "Exact Question Stem / Prompt", "What It's Asking (Deep-Dive)", "Tested Skills & Grammar Rules"
    ]
    for col_idx, h in enumerate(rw_headers, 1):
        cell = ws_rw.cell(row=4, column=col_idx, value=h)
        cell.fill = BLUE_HEADER_FILL
        cell.font = HEADER_FONT
        cell.alignment = Alignment(horizontal="center" if col_idx in [1, 2, 3] else "left", vertical="center", wrap_text=True)
    ws_rw.row_dimensions[4].height = 26

    rw_questions = [q for q in questions if q["section"] == "Reading and Writing"]
    for row_idx, q in enumerate(rw_questions, 5):
        fill = ALT_ROW_FILL if row_idx % 2 == 0 else WHITE_FILL
        row_values = [
            q["id"], q["module"], q["q_num"], q["domain"], q["type"],
            q["stem"], q["what_asking"], q["skills"]
        ]
        for col_idx, val in enumerate(row_values, 1):
            cell = ws_rw.cell(row=row_idx, column=col_idx, value=val)
            cell.font = BOLD_FONT if col_idx in [1, 5] else REGULAR_FONT
            cell.border = GRID_BORDER
            cell.fill = fill
            cell.alignment = Alignment(
                horizontal="center" if col_idx in [1, 2, 3] else "left",
                vertical="top",
                wrap_text=True
            )
        ws_rw.row_dimensions[row_idx].height = 38

    rw_widths = {1: 14, 2: 12, 3: 8, 4: 28, 5: 34, 6: 48, 7: 55, 8: 50}
    for col_idx, width in rw_widths.items():
        ws_rw.column_dimensions[get_column_letter(col_idx)].width = width

    # -------------------------------------------------------------
    # SHEET 4: MATH SPECIFIC (54 Qs)
    # -------------------------------------------------------------
    ws_math = wb.create_sheet(title="Math Section (54 Qs)")
    ws_math.views.sheetView[0].showGridLines = True

    ws_math.merge_cells("A1:J1")
    ws_math["A1"] = "Digital SAT Practice Test 11 — Math Section Breakdown"
    ws_math["A1"].font = TITLE_FONT

    ws_math.merge_cells("A2:J2")
    ws_math["A2"] = "54 Total Questions (Module 1: 27 Qs, Module 2: 27 Qs) • Multiple Choice (42 Qs) + SPR Grid-ins (12 Qs) • Algebra, Advanced Math, Problem-Solving, Geometry"
    ws_math["A2"].font = SUBTITLE_FONT

    math_headers = [
        "Question ID", "Module", "Q#", "Domain", "Question Type / Category", 
        "Format", "Exact Question Stem / Prompt", "What It's Asking (Deep-Dive)", "Tested Skills & Math Formulas"
    ]
    for col_idx, h in enumerate(math_headers, 1):
        cell = ws_math.cell(row=4, column=col_idx, value=h)
        cell.fill = PURPLE_HEADER_FILL
        cell.font = HEADER_FONT
        cell.alignment = Alignment(horizontal="center" if col_idx in [1, 2, 3, 6] else "left", vertical="center", wrap_text=True)
    ws_math.row_dimensions[4].height = 26

    math_questions = [q for q in questions if q["section"] == "Math"]
    for row_idx, q in enumerate(math_questions, 5):
        fill = ALT_ROW_FILL if row_idx % 2 == 0 else WHITE_FILL
        row_values = [
            q["id"], q["module"], q["q_num"], q["domain"], q["type"],
            q["format"], q["stem"], q["what_asking"], q["skills"]
        ]
        for col_idx, val in enumerate(row_values, 1):
            cell = ws_math.cell(row=row_idx, column=col_idx, value=val)
            cell.font = BOLD_FONT if col_idx in [1, 5] else REGULAR_FONT
            cell.border = GRID_BORDER
            cell.fill = fill
            cell.alignment = Alignment(
                horizontal="center" if col_idx in [1, 2, 3, 6] else "left",
                vertical="top",
                wrap_text=True
            )
        ws_math.row_dimensions[row_idx].height = 38

    math_widths = {1: 14, 2: 12, 3: 8, 4: 28, 5: 34, 6: 25, 7: 48, 8: 55, 9: 50}
    for col_idx, width in math_widths.items():
        ws_math.column_dimensions[get_column_letter(col_idx)].width = width

    # Save Workbook
    filename = "SAT_Practice_Test_11_Question_Types.xlsx"
    wb.save(filename)
    print(f"Successfully generated styled Excel spreadsheet: {filename}")
    return filename

if __name__ == "__main__":
    create_styled_excel()
