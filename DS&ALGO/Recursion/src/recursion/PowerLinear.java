package recursion;

import java.util.Scanner;

public class PowerLinear {

	public  void main(String[] args) {
		// TODO Auto-generated method stub
Scanner sc=new Scanner(System.in);
int x=sc.nextInt();
int n=sc.nextInt();
int xn=power(x,n);
System.out.println(xn);
	}

	private int power(int x, int n) {
		// TODO Auto-generated method stub
		int xnm1=power(x,n-1);
		int xn=x*xnm1;
		return xn;
	}

}
