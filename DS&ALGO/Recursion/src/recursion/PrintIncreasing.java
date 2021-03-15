package recursion;

import java.util.Scanner;

public class PrintIncreasing {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner (System.in);
	       int n=sc.nextInt();
	       PrintIncreasing(n);
	}

	private static void PrintIncreasing(int n) {
		// TODO Auto-generated method stub
		if(n==0)
		{
			return;
		}
		PrintIncreasing(n-1);
		System.out.println(n);
	}

}
