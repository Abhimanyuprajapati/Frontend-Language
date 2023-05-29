/*
Find richest (Contest)
easy
Time Limit: 2 sec
Memory Limit: 128000 kB
Problem Statement
Given the Income of three company employees, namely A, B, and C, Find the richest one.
Note: The income of all three employees is distinct.
Input
Three integers are given as input. a, b, and c denote the Income of employees A, B, and C, respectively.

Constraints
1 ≤ a ≤ 105
1 ≤ b ≤ 105
1 ≤ c ≤ 105
Output
Print the Richest employee.
Example
Sample Input:
92 7 23

Sample Output:
A

Explanation:
The income of Employee A is maximum among all three employees.
*/
//    Answer
/*
    import java.io.*; // for handling input/output
import java.util.*; // contains Collections framework

// don't change the name of this class
// you can add inner classes if needed
class Main {
    public static void main (String[] args) {
        // Your code here
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        int c=sc.nextInt();
        if((a>b)&&(a>c)){
            System.out.println("A");
        }else if((b>c)&&(b>a)){
            System.out.println("B");
        }else{
            System.out.println("C");
        }
    }
}
*/