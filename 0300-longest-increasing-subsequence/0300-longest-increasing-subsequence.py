class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return 0
        
        t = [1] * len(nums)  
        
        for i in range(1, len(nums)):
            for j in range(i):
                if nums[i] > nums[j]:
                    t[i] = max(t[i], t[j] + 1)
        
        return max(t)  