class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        res=0
        for num in nums:
            numOfDig=0
            for i in str(num):
                print(i)
                numOfDig+=1
            if numOfDig%2==0:
                print(f'num={num} will be added')
                res+=1
        return res

#
#12,345,2,6,7896
#
#