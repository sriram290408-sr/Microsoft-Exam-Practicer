import os, re

def check_all_exam_banks():
    exam_files = [
        ("src/data/exams/pl300.js", 200),
        ("src/data/exams/pl900.js", 200),
        ("src/data/exams/dp600.js", 200),
        ("src/data/exams/dp700.js", 200),
        ("src/data/exams/dp800.js", 200),
        ("src/data/exams/databricks/de_assoc.js", 100),
        ("src/data/exams/databricks/da_assoc.js", 100),
        ("src/data/exams/snowflake/cof_c03.js", 100),
        ("src/data/exams/microsoft/dp750.js", 100),
        ("src/data/exams/microsoft/ai103.js", 100),
        ("src/data/exams/microsoft/ab620.js", 100),
        ("src/data/exams/anthropic/ccdv_f.js", 100)
    ]

    total_questions = 0
    for path, expected_count in exam_files:
        assert os.path.exists(path), f"File {path} does not exist"
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Count questions by '"q":' occurrences
        q_matches = re.findall(r'"q":\s*"', content)
        assert len(q_matches) == expected_count, f"{path} expected {expected_count} questions, found {len(q_matches)}"
        total_questions += len(q_matches)
        print(f"✓ {path}: {len(q_matches)} / {expected_count} questions verified")

    print(f"\nAll 12 certification banks verified! Total Questions in Platform: {total_questions}")

if __name__ == '__main__':
    check_all_exam_banks()
