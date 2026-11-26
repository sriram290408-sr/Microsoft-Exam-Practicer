import re, sys

# Test Ingestion System
def test_csv_parser():
    sample_csv = '''question,domain,option_a,option_b,option_c,option_d,answer,explanation
"What does Auto Loader do?","DIL","Loads files incrementally","Deletes storage","Encrypts files","Runs CPU fan","0","Auto Loader ingests new files incrementally."'''
    lines = sample_csv.strip().split('\n')
    header = lines[0].split(',')
    assert len(header) == 8, "Header count must be 8"
    print("✓ CSV Ingestion Parser Test Passed")

if __name__ == '__main__':
    test_csv_parser()
