package recursion;

import java.util.Scanner;

public class Factorial {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner sc=new Scanner(System.in);
int n=sc.nextInt();
int f=factorial(n);
System.out.println(f);

	}

	private static int factorial(int n) {
		// TODO Auto-generated method stub
		if(n==1)
		{
		return 1;
		}
		int fnm1=factorial(n-1);
		int fn=n*fnm1;
		return fn;
		
	}

}
