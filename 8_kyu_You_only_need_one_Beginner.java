/*
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

*/

// MY SOLUTION

public class Solution {

    public static boolean check(Object[] a, Object x) {
        for (int i = 0 ; i < a.length ; i++){ // declare i as int in java
         if(a[i] == x){ 
           return true;
         }
        }
        return false;
    }

}

// OTHER SOLUTIONS

public class Solution {

    public static boolean check(Object[] a, Object x) {
        return Arrays.asList(a).contains(x); 
      // asList converts array to List , contains is a method for searching for element in the List
    }

}
