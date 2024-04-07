/**
 * 1768. Merge Strings Alternately
Easy

You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
 */

/**
 * Solved: 3/14/24
 * Runtime: 65ms, 7%
 * Memory: 48.96MB, 83%
 * Acceptance Rate: 79.6%
 */


/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let index1 = 0;
    let index2 = 0;
    let newWord = "";

    while((index1 + index2) < (word1.length + word2.length)) {
        if (index1 < word1.length) {
            newWord += word1[index1];
            index1++;
        }
        if (index2 < word2.length) {
            newWord += word2[index2];
            index2++;
        }        
    }

    return newWord;
};