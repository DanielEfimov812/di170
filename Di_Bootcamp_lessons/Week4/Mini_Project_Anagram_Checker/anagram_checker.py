class AnagramChecker:
    def __init__(self, file_path):
        with open(file_path, "r", encoding="utf-8") as file:
            self.words = [line.strip().lower() for line in file if line.strip()]

    def is_valid_word(self, word):
        return word.lower() in self.words

    def is_anagram(self, word1, word2):
        return sorted(word1) == sorted(word2) and word1 != word2

    def get_anagrams(self, word):
        word = word.lower()
        anagrams = []

        for w in self.words:
            if self.is_anagram(word, w):
                anagrams.append(w)

        return anagrams