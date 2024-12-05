class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l=0
        r=len(nums)-1
        while l<=r:
            m=(l+r)//2
            if target == nums[m]: return m
            if target>nums[m]:
                l=m+1
            if target<nums[m]:
                r=m-1
        return -1
#         
#            r       
#-1,0,3,5,9,12
#     m
# l