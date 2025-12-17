# array

quick sort 
```sh
void quick_sort(int arr[], const int left, const int right) {
    int i = left, j = right;
    int temp;
    int pivot;
    pivot = arr[(left+right)/2];
    while (i <= j) {
        while (arr[i]<pivot) {
            i++;
        }
        while (arr[j]>pivot) {
            j--;
        }
        if (i <= j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    if (left < j) {
        quick_sort(arr,left,j);
    }
    if (i < right) {
        quick_sort(arr,i,right);
    }

}
int main(){
    int arr[]={12,34,32,22,13,65,23,35,45,56,67,85,11,17,18,19};
    int len = sizeof(arr)/sizeof(arr[0]);

    quick_sort(arr,0,len-1);
    for(int i=0;i<len;i++) {
        printf("%d ",arr[i]);
    }
    return 0;
}

```