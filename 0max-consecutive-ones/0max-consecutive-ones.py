class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        resLen=0
        l=0
        for r in range(len(nums)):
            if nums[r]==0:
                l=r+1
                continue
            curLen=r-l+1
            resLen=max(resLen, r-l+1)
        
        return resLen
        
#i
#      R
#1,1,0,1,1,1
#      L

#curLen=2
#resLen=2
