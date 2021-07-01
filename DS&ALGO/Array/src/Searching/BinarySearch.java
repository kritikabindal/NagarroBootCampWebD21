package Searching;

public class BinarySearch {
 
	
	
	int bSearch(int arr[],int n,int x)
	{
		int low=0,high=n-1;
		while(low<=high)
		{
			int mid=(high-low)/2;
			if(arr[mid]==x)
				return mid;
			else if(arr[mid]>x)
				high=mid-1;
			else
				low=mid+1;
		}
		return -1;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
            int arr1[]= {45,67,76,85,90};
//		int barr[]=new barr[arr1];
         bSearch(arr1,arr1.length,45);
	}

}
