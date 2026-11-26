def test_question_schema():
    sample_q = {
        "id": "q1",
        "d": "DIP",
        "q": "What is the Lakehouse architecture?",
        "o": ["Unified storage and compute", "Traditional RDBMS", "Flat file system", "In-memory cache only"],
        "a": [0],
        "multi": False,
        "e": "Combines data lake and data warehouse benefits."
    }
    assert isinstance(sample_q["q"], str) and len(sample_q["q"]) > 8
    assert isinstance(sample_q["o"], list) and len(sample_q["o"]) >= 2
    assert isinstance(sample_q["a"], list) and len(sample_q["a"]) > 0
    assert sample_q["a"][0] < len(sample_q["o"])
    assert isinstance(sample_q["e"], str) and len(sample_q["e"]) > 0
    print("✓ Question Schema Validator Test Passed")

if __name__ == '__main__':
    test_question_schema()
