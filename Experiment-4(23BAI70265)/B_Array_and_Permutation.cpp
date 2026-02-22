#include <bits/stdc++.h>
using namespace std;

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    cin >> t;
    while(t--){
        int n;
        cin >> n;

        vector<int> p(n), a(n);
        for(int i = 0; i < n; i++)
            cin >> p[i];
        for(int i = 0; i < n; i++)
            cin >> a[i];

        
        vector<int> b;
        b.push_back(a[0]);
        for(int i = 1; i < n; i++){
            if(a[i] != a[i-1])
                b.push_back(a[i]);
        }
        int j = 0;
        for(int i = 0; i < n && j < b.size(); i++){
            if(p[i] == b[j])
                j++;
        }

        if(j == b.size())
            cout << "YES\n";
        else
            cout << "NO\n";
    }
}