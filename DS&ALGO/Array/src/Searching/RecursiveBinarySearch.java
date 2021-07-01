package Searching;

public class RecursiveBinarySearch {

	
	int bSearch(int arr[],int low,int high,int x)
	{
		
		if(low>high) {
			return -1;
			}
		int mid=(low+high)/2;
		if(arr[mid]==x)
			return mid;
		elseif(mid>x)
		return bSearch(arr,low,mid-1,x);
		else
			return bSearch(arr,mid+1,high,x);
	}
		
	}
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
