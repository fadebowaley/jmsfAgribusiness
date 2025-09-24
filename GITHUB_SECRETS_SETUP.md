# GitHub Secrets Setup Guide

## 🔐 Required GitHub Secrets

To enable automated deployment, you need to add these secrets to your GitHub repository:

### Step 1: Access Repository Settings
1. Go to your repository: https://github.com/fadebowaley/jmsfAgribusiness
2. Click on **Settings** tab
3. In the left sidebar, click **Secrets and variables** → **Actions**

### Step 2: Add Required Secrets

Click **New repository secret** for each of the following:

#### 1. NAMECHEAP_SSH_PRIVATE_KEY
- **Name**: `NAMECHEAP_SSH_PRIVATE_KEY`
- **Value**: 
```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAACmFlczI1Ni1jdHIAAAAGYmNyeXB0AAAAGAAAABCArPl379
ZbUtQKYCXIgiKDAAAAEAAAAAEAAAEXAAAAB3NzaC1yc2EAAAADAQABAAABAQChpYg9h/KR
l/u4NFY7G7qVANKyqWP2Wl/4zHHIPiOlFnat74CkUQT3b5FJSVAtwK06cc5WnyIrxmiwjC
spOd67S9PCWfU21sC+gQbKbZe+4a8/mF125jsd3DnjD1xIc0S1/6H3/5G3ND93Up/U0aBL
oDwQ+NvTciRE0piPlo+3fRBA68iCWUoWC73uqo3AqiLEre3/p1tJZjKrHLSWiPnR3X1ErB
2wmAtsvsLw9nqra5rGumun2Te8F9LuKdtHhgIUnb1fNxwHIcSTgChrkxq9rKIzfJgDCjOh
Fgbo98I/mni4zIhpf+1QoQ9DL2MkEpwWs4vU3h6LxAPM2En6jWj7AAADwN1aoH3zrZjOY4
o3s28E/Hhyo3nvU7NknYKoEGxWpgL7ToUXb3w+13mg4nP9RpHjYyijMC6HuDf2k8f4HsG/
pLY/dF8sZKEOpFPq9ZCMyKxMSgGZfHXXjdaoh2T2wp1tBdwTgt3cVhlPbmteFNY6T38GNB
188dNgynOvYboeGkuSYJCwc7me5kM8S0B7XmaeA32kG3ueAdX/B23QC6/HWoaWw+RKTtUa
jRyXCy4nM2lVUAVRvVWGyixP1dPYgcCN2Rb5zkBjXmc0VJ93sPMdlQB6ULUWMhY7DoQpmG
tbYDS9uIvTcggfbiBDqbyxh7z3sC3dlHwdtALF8NxhkRtx4vtGXgLR1v1iIscebGth1NKw
CZjv04KnGnZ443wGiiWMusRdW4k1MHmnZuPtlgoAmB9CHO0fsyp8aYAF0O9dYGRcNu/Yxm
RuG6VzL9gfXbfChRPToWw0Cxlp+sPCtsPrR28O7EwAbUwPuJSFo/hcROH2zg2+U4ur+toJ
4c9VJQp8Y4qcxSWLGUOnopfsfmC0mGRjWuxah3tlNq4vIx8S0WKs6LxEXCaQj+EqDpJOYR
VM9tJcU/IWXbr/FLoO9+pyBQ/oXQKN/iuameGTa4MMEJvhDlXcgRDqGq9kTbWhbXpwSUmY
KhjCga+FO5kMzIy6IFa2pJp0olDBT/m1Idh+nNRfVESamwg9CvEP+OqVR9Gg1zGfrHu6m7
enGRJf7LgA5D0Lg/20+62OZb6HHo49xZR9e+pJF8G2bEeMHBH/kik3Rrz2Jf1FIE0RvPrh
JRD2P52fyg0r+L/rgarAYI3p5UBmkx7RzvLVFfq792eNF2e6YT0u77Jf6o2ebBNgkWjbVg
voVIL1KdFBdnj0/oWJRLqycTgHDMbcv4ABVeDU2xy3r3pTySXvWwb2Obp/Q1EC7/DKLNjW
LxEwiqHtntdFdLgvOt5CohaWOOvOHlscEhveJqNGvrRVcs3sfLLRLaeyQB0F/Os1QYsMHo
Ni0++AxwOslYXbSJy9ylEiQDsL+kXWtFm7pY5d7b/tPezxjA7CnJHGwd1AOCq9b6kEUfT3
r34HW8VI/dBYzgohnfgTDFQykW+9Fs0Yj3/mp/JFZV3ivF9WMEbblIdB/LQVx1+eaDsiQd
ie2zFHwuBuOq5PiJmRZjvIEtO+Dxx2jc33CwRofzbGzwP+3hSpetOyhJm41UfG0QCwiXrn
IE38gyRDqiUpnZsWRJ519mBgEtCkby3cvK7ZiqEII9GEHX8t1Ec7bIjLA9KrmE8jTQV+4v
Up/emR+A==
-----END OPENSSH PRIVATE KEY-----
```

#### 2. NAMECHEAP_SSH_USER
- **Name**: `NAMECHEAP_SSH_USER`
- **Value**: `jmsfzikd`

#### 3. NAMECHEAP_SSH_HOST
- **Name**: `NAMECHEAP_SSH_HOST`
- **Value**: `66.29.132.130`

### Step 3: Verify Secrets
After adding all three secrets, you should see them listed in your repository secrets.

## �� Testing the Setup

Once you've added the secrets:

1. **Manual Test**: Push to the `production` branch
2. **Check Actions**: Go to the **Actions** tab in your repository
3. **Monitor Deployment**: Watch the workflow run and check for any errors

## 🔧 Troubleshooting

### Common Issues

**SSH Connection Failed**
- Verify the server IP address is correct
- Check if SSH is enabled on the Namecheap server
- Ensure the SSH key is properly formatted (no extra spaces/newlines)

**Permission Denied**
- Verify the SSH key matches the one on the server
- Check if the username is correct
- Ensure the key has proper permissions

**Deployment Directory Issues**
- Verify the `public_html` directory exists
- Check if the user has write permissions
- Ensure the directory path is correct

## 📞 Next Steps

After setting up the secrets:
1. The CI/CD pipeline will automatically deploy when you push to `production`
2. You can also trigger manual deployments from the Actions tab
3. Monitor the deployment logs for any issues

---

**Repository**: https://github.com/fadebowaley/jmsfAgribusiness
**Actions**: https://github.com/fadebowaley/jmsfAgribusiness/actions
