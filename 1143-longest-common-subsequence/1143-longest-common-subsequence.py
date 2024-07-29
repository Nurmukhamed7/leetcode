class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        cache = [[0 for i in range(0, len(text1) + 1)] for i in range (0, len(text2) + 1)]
        for s2Row in range(0,len(text2)+1):
            for s1Col in range(0,len(text1)+1):
                print(cache[s2Row][s1Col])
                if (s2Row == 0 or s1Col == 0) :
                    cache[s2Row][s1Col]=0
                elif (text2[s2Row-1] == text1[s1Col-1]):
                    cache[s2Row][s1Col] = cache[s2Row - 1][s1Col - 1] + 1
                else :
                    cache[s2Row][s1Col] = max(cache[s2Row - 1][s1Col], cache[s2Row][s1Col - 1])

        return cache[len(text2)][len(text1)]