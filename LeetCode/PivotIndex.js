/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce(function (x,y) {return x+y});
    let traversed = 0;

    for( let i = 0; i < nums.length; i++)
    {
        if(sum - traversed - nums[i] == traversed)
        {
            return i;
        }
        traversed = traversed + nums[i];
    }
    return -1;
}