/*
Type of triangle (Contest)
easy
Time Limit: 2 sec
Memory Limit: 128000 kB
Problem Statement
Given three side lengths a, b, and c, check whether a triangle is equilateral, scalene or isosceles triangle.
NOTE:
Equilateral triangle: All sides and angles are equal.
Isosceles triangle: Two sides and two angles are equal.
Scalene triangle: All sides and angles are different.
Input
The first line contains three Integers a, b and c.

Constraints
1 ≤ a, b, c ≤ 100
Output
Print "equilateral" if triangle is equilateral, "scalene" if triangle is "scalene" and "isosceles" if triangle is isosceles.
Example
Sample 1:
Input:
2 3 4
Output:
scalene
*/

// Answer of the Question


// import java.io.*; // for handling input/output
// import java.util.*; // contains Collections framework

// // don't change the name of this class
// // you can add inner classes if needed
// class Main {
//     public static void main (String[] args) {
//         // Your code here
//         Scanner sc=new Scanner(System.in);
//         int a=sc.nextInt();
//         int b=sc.nextInt();
//         int c=sc.nextInt();

//         if((a==b) && (b==c) && (a==c)){
//             System.out.println("equilateral");
//         }else if((a==b)||(a==c)||(b==c)){
//              System.out.println("isosceles");
//         }else{
//             System.out.println("scalene");
//         }
//     }
// }