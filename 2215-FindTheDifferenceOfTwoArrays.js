
/**
 * 2215. Find the Difference of Two Arrays
 * Easy
 * Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

 * answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 * answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 * Note that the integers in the lists may be returned in any order.
 */


/**
 * Solved: 4/4/24
 * Runtime: 142ms, 6.73%
 * Memory: 56.63MB, 33%
 * Acceptance Rate: 78.6%
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer1 = [];
    let answer2 = [];

    for (let i = 0; i < nums1.length; i++) {
        let seen = false;
        for (let j = 0; j < nums2.length; j++) {
            seen = nums1[i] === nums2[j] || seen;
        }
        if (!seen) {
            for (let k = 0; k < answer1.length; k++) {
                seen = (answer1[k] === nums1[i]) || seen;
            }

            if (!seen) {
                answer1.push(nums1[i]);
            }
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        let seen = false;
        for (let j = 0; j < nums1.length; j++) {
            seen = nums2[i] === nums1[j] || seen;
        }
        if (!seen) {
            for (let k = 0; k < answer2.length; k++) {
                seen = (answer2[k] === nums2[i]) || seen;
            }

            if (!seen) {
                answer2.push(nums2[i]);
            }
        }
    }

    return [answer1, answer2];

};