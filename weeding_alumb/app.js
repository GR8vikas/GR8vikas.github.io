/* ==========================================================================
   WIKAS & KRUSHI DIGITAL WEDDING ALBUM - CORE LOGIC (ALL 299 PHOTOS)
   ========================================================================== */

// 1. Data Source - All 299 Photos from Google Drive
const photosData = [
  {
    "id": "1AY_FmppKF_jxf31sTMMjuXkY5g2KFeRV",
    "name": "DSC_8613.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1X_WOqPxLsxiKQDHY5hcoeEx4B1SciGU9",
    "name": "DSC_8614.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Hu0ErDn1jFTditde9ZC7nY4Brafoi0Pk",
    "name": "DSC_8615.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1IWeTEkMtwNs6CoVsBshSu988UeUOrrxW",
    "name": "DSC_8616.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1PrxSpQQ939aHvAYWnhHjFGOGRWXTglUa",
    "name": "DSC_8617.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1C2Xv7fyXyGQv2weGf_a_UMEPiJe-oNPV",
    "name": "DSC_8618.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1KGuQbUZA7u04sOMoPjVRC2BMJ1N-5JPS",
    "name": "DSC_8619.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1mw-hVI1RQ2jUO7Zgzj3pJ9ftQCbPOxa_",
    "name": "DSC_8620.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "17UG4sPYge-MApKqG_SHp4N3DZKdIYnVM",
    "name": "DSC_8621.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1qxKkHPINbgobseiJEkgRlg0tctnDom5K",
    "name": "DSC_8622.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1iy7R6h9CPV5ndkpIgCoN4Rrjlt5Wifgc",
    "name": "DSC_8623.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1-gSQy7XbijSLRhWRjjcbhJGjpTIlFnWW",
    "name": "DSC_8624.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1w1luQwpc-NWH37DEws4uTSO_FtcyiTZV",
    "name": "DSC_8625.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1qKOVkUCP__CEhtMrxFqlH31oONVT1KkT",
    "name": "DSC_8626.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1cpMInbxltjqn-8VcFzBpBYwGQZWUV_tM",
    "name": "DSC_8627.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1SNS3HN4BC-tzE7xoclPM14pEc8_GR64R",
    "name": "DSC_8628.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1FiQt9EG59Ob0uCsVMYbuIDg8EwM8dNX6",
    "name": "DSC_8629.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1MlfLjiGQrYjnQ7uDZflSB2a4gs9wRVtV",
    "name": "DSC_8630.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1jlEkn6dSvg2VNpQyWpOBFS2Q9eULleLx",
    "name": "DSC_8631.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1gnJcPJr4IzhLh3_uoeJHhyxqdpYMioZt",
    "name": "DSC_8632.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "18aR68uHaFSsLd13DJpAOwnqpZBulOGeJ",
    "name": "DSC_8633.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1LrCGY4SC5dWwo4aXls8LNnOn3rRrP25z",
    "name": "DSC_8634.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1CJGgYahVuHvBg7HjRKIwdZ3hlJo7TIR0",
    "name": "DSC_8635.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1G-iX5dfQlXuCOzw1ctJgi_jA9xMwzQa0",
    "name": "DSC_8636.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1O-DosXc_iwsNweOKO9dO8bM1YS_V_LJH",
    "name": "DSC_8637.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "146k9ADEDVlupHtFu5QzQSdjrn8IEXcta",
    "name": "DSC_8638.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "18g692XnD6VFTL7x-wk7mF8smvGmjwp_F",
    "name": "DSC_8639.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1VdsvdelDeUcLtw0sHdHpoYDgx0TqjfNk",
    "name": "DSC_8640.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1oJ4ZCmg-uoVdz_cZbghKkdRKjt6szQUV",
    "name": "DSC_8641.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1_FY9U8vTO84cJJk3n7NHAyLf7QVqGrU0",
    "name": "DSC_8642.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Whmdsa_SrKYiCNPr1WDqOJYEjXg69FIG",
    "name": "DSC_8643.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1cwD_Gz8U-coLCAZbdCGK0QPk6HgRjBic",
    "name": "DSC_8644.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1cS_N-baJiH4ejkDtVonIG6NCkYN8Nk3n",
    "name": "DSC_8645.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1kV-XMcWzoKWYS_SN0IjDHJQaqw2xwZhe",
    "name": "DSC_8646.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Sg0A4Ex_5Er3tpSy5xkvGO2uu-2AZtea",
    "name": "DSC_8647.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1dPePvGTq6pJg_-QGRIrl86CIWMBq_tVR",
    "name": "DSC_8648.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Z_xf7xCRdMHcPW7d0NptWv0wzuWwGVc3",
    "name": "DSC_8649.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "13tXk6xUu5XlhmKZMpCSmVCiLCCMiCYPk",
    "name": "DSC_8650.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "13ZLcSXyKkI-mx7pbdqvvvmCcQjqjdmj6",
    "name": "DSC_8651.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ULd24XfwM95iiZ_YGMoPQ9QyWMFZGA6c",
    "name": "DSC_8652.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1F222n63cyDB1RE1asU5h9Y9kkBXu2ypk",
    "name": "DSC_8653.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1JHN3sHFgPGymJMEmgSftFrfCHNN_P2o3",
    "name": "DSC_8654.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1FlvLsJbEDR3XIXfOmqOZZPOS_dcCcb6a",
    "name": "DSC_8655.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1NYsnNZQEW-1j92HSQeXv2Cj-RuV-BGVW",
    "name": "DSC_8656.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1F6MrFlpSJQtMg32pCfGpRFjz0vWvxuPd",
    "name": "DSC_8657.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1g6OWSq-LDm2H6qBYogCpERtA3CUQ0DFl",
    "name": "DSC_8658.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1ulP0lRhU2OoCzgMkLb_K---2xD6dd_Cn",
    "name": "DSC_8659.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1K4ObHWMxgCXY2aQcpfSA7EWTrnmku2FO",
    "name": "DSC_8660.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1VWPNHeG1sA996SnM3QKS0DpGP3eWgJng",
    "name": "DSC_8661.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "10Ef0secWaoGns6-tae1NuEgVayN7V4aT",
    "name": "DSC_8662.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1lrrRUfrHoC9mCketmeLbHnNYc8zvxiNl",
    "name": "DSC_8663.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Hq0yxxFV3pDr0Krr6DZzSSmTrXfN3zCw",
    "name": "DSC_8664.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1BlE61lwOrF9vwQR0QrRBVn-BQP79TBmC",
    "name": "DSC_8665.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1VviMkuZHPl_mQFu7ZJzYVVFQouPNNp_6",
    "name": "DSC_8666.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1RO2e1h3Hos96PZshjsc7L1t1HF_-_9I5",
    "name": "DSC_8667.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Jq4bsppqzIoTNB0O291YEXjQH4dqmpJQ",
    "name": "DSC_8668.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ZkOGUQZMWSzRVoKOAXii3lQVUd_2vUbq",
    "name": "DSC_8669.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1k_fSLSI8QC9Nac38eOyS_XQ5cTSF1cT_",
    "name": "DSC_8670.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1x3wi8VMt_6TDxO8nmtNqg3I-57o2wiBq",
    "name": "DSC_8671.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1KKS9BdfUd9cRVbSyfnCiVq43RLITMO_X",
    "name": "DSC_8672.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1JdHB7brh5Ao6BB9Sa3hvWvv1iJfCQ3wb",
    "name": "DSC_8673.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1cq1lY-3vw_kQNvlti2PNsiUzA63Mq1QY",
    "name": "DSC_8674.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1xgMZa-dorBg0--tXGytfibD_W5T_uYhC",
    "name": "DSC_8675.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "14-5ATbabNp_sXt4z93pz1UVtwwqwP2nD",
    "name": "DSC_8676.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "17TJ698cEfk3TXwseO0ri9_CFXZVZQr09",
    "name": "DSC_8677.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1CBKOPZb6GedqNPq-qMK_w5NvCHlBL9Xa",
    "name": "DSC_8678.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1270F6eIyXBGz3lG2Nr7BFgrs2WTWSKbE",
    "name": "DSC_8679.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Z-AWaw1kpLxF2nbx4dxoRbMwUitRKzcf",
    "name": "DSC_8680.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1iLr8r0Xlbl5mAztPc0CJiznqt5MovZAQ",
    "name": "DSC_8681.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1GE8adnEIyBpil8g1tFBl4zWizlo56mfd",
    "name": "DSC_8682.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1RSPErp3pKVD-lsM6Utc9upk0_rNMz8R7",
    "name": "DSC_8683.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1-kqu3SLJMTE6ITymOp3avN00Dg_K2Kxx",
    "name": "DSC_8684.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1i6bUtIpyMSKPLmF5PFyLurW4oDGOvHwr",
    "name": "DSC_8685.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1P8fkxvdjFwVhSbOsXfPf_40ntW2Z9SLh",
    "name": "DSC_8686.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1-_Dcx77okpHDK2WTRMAX-T-YLkZ4XMJs",
    "name": "DSC_8687.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1mL6IFV_ulAJuPivFTS-R0tiUhHmxT0B3",
    "name": "DSC_8688.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1FZQAov9YoK94qSkRzwnrlpYXDdCN07JV",
    "name": "DSC_8689.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1KJQy-DBHeLpHXa84Ddq33KqUsYlNKUW5",
    "name": "DSC_8690.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1eT1L0gDVoa_asIEJraSaUrCBY_3sFwg1",
    "name": "DSC_8691.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1G9s3eJe9_Ro0N6yCEeR8eUcMUdOzHNfA",
    "name": "DSC_8692.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "14QINOitXrKQriHjVQRAXbqDqyiROot8D",
    "name": "DSC_8693.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1FCHmxEFvSUUbYz-FZOVfOFfT-CpIn_J6",
    "name": "DSC_8694.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1MsQaLcvCcupeYBd2G9uRbDkKFQb2kvz1",
    "name": "DSC_8695.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1xg-wgJTiwMY79IBo72haw4cFhcbDdscO",
    "name": "DSC_8696.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1pcgtKtd38NtKcNbMYVwuRtaEigPePMJ8",
    "name": "DSC_8697.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1nNoK-F1nGnyg5JdFYJ2Z6ieeygGHhuMb",
    "name": "DSC_8698.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ozgXZ3D-10mT2wH7h9gu5Pc3POL1Aqcx",
    "name": "DSC_8699.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1YOTo1DZXoaXoMQIw9YomsArRtAKGJ-Yc",
    "name": "DSC_8700.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1uiJ8ZGydo3hD_P4x70cSFdPyKsxtSmax",
    "name": "DSC_8701.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1vzxBXp9QQug11ont1H27RWty8c_N4dWm",
    "name": "DSC_8702.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1mXQTFgzFfY63WewRAl6C6jIMoFMfJPHe",
    "name": "DSC_8703.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1D_Pj6ySXPhXuRCuPJwiyCTgy6_YR4wbl",
    "name": "DSC_8704.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1kHelvyEbH6XAfqfuV6u2lkAIzTHi5TxH",
    "name": "DSC_8705.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1GkgOye2ZrGkV7WeOfDzBykcHziQODXgU",
    "name": "DSC_8706.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1nIYa4dvSJlLVAAadR0TpfZXIBDnAnixe",
    "name": "DSC_8707.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1xFs4QzbzmubhYYOYczMYz6iom63HAEIT",
    "name": "DSC_8708.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1SwUy7C_EBUFPYpYt9b8cUxmYIBs3x3U7",
    "name": "DSC_8709.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1jLZy_8nv1MdOiuftVBSx98RHdy1PfmEN",
    "name": "DSC_8710.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1A_vVfdyQB_bPBDvbVVKHaWoa65F6bxH6",
    "name": "DSC_8711.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1vx-6tiC5ytq8qmbiGXn2XR-kk9mqWT0i",
    "name": "DSC_8712.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1kSiBiiu38TH9yYd5dCrb1_iDWIElsv2Z",
    "name": "DSC_8713.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1eC0X6uXiyUAt-IRGVk45a68fHUufA_Jk",
    "name": "DSC_8714.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1E600WC274ueA9wgR0VQv-LsmcI0DIU9n",
    "name": "DSC_8715.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1UsuaSzv4c3bp8TjfUos32gekxpr89osX",
    "name": "DSC_8716.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "15BscGUFeIC1uqDLWJ2uJu9IFjkdpU3UY",
    "name": "DSC_8717.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1oL9N4DI-O-qIRdEC2Oo03Tmky0NjU0cP",
    "name": "DSC_8718.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1pnhglpMGYp9af7mXNU_0aMgMTwWRyCBS",
    "name": "DSC_8719.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1tErbB9Et9jF499v3ExitA5ToqciFEfCr",
    "name": "DSC_8720.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "14BtS-g0LvItd1Esw-us9Yp-YVBo969eD",
    "name": "DSC_8721.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1WJQVcVJHVD-xRAx3dJAMTpYUlo8LE7WR",
    "name": "DSC_8722.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1pUkOHC06BbNJD27CljvDWA_GV2sjoqrf",
    "name": "DSC_8723.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1JOiVtRiXmfLiTTajlL81XWQE-AbphEg7",
    "name": "DSC_8724.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "19XjFjjOIgTAbx-1fFOaw9wjh2CHDUEb1",
    "name": "DSC_8725.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1UgVO7FgqCahgOTOfGstGxG04ap7TirXG",
    "name": "DSC_8726.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1u3ymJzp3w92hTJFw4IXF6E7ommpIBdbc",
    "name": "DSC_8727.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1qv5MuFnELlEL1HyXm6SMoq2zkdS7IImE",
    "name": "DSC_8728.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1bGOYV6g83dCX_SzJSP1d_WFZBsK3nJ5K",
    "name": "DSC_8729.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1-9AhwqgBvjJOa2sB9XQsFBLbqYcnXSgj",
    "name": "DSC_8730.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1u-XqO3NOGe0qgyUdkuLVI5bm8zNXXgdb",
    "name": "DSC_8731.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Ll2ccJkRu05CiqhunXbWXx2MfOFRxqdi",
    "name": "DSC_8732.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1-HkkSRDfnKfHXm_0rcCvvrjQByKcSY8o",
    "name": "DSC_8733.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "14jT7RRaEmfGxcNSEsucLMVss8-VUiJf_",
    "name": "DSC_8734.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1h7e-XYc4ueKAHI6ER5bPu4rwiL2cG8mm",
    "name": "DSC_8735.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ORdESEkiY3vewTVDh5c_p0gw6D99LEER",
    "name": "DSC_8736.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "115k49TwSOwjo06L1TRlFzEFrRPeAU5qt",
    "name": "DSC_8737.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1xN7n_WsZijYVrVnslT6Wo0KRhCcKLGv6",
    "name": "DSC_8738.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1dFc5eA-Z9v35btwqVZNGobVatbOJ3dBX",
    "name": "DSC_8739.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "14fBY5JvgY5XiKe_vxW8oErJ5lB29Xl2g",
    "name": "DSC_8741.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "16I0YOdf4WmwfzeHkt8diObRCEvQeikU1",
    "name": "DSC_8742.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1D_RGakMToJHdtXqB9NSEql-T23FzdGAw",
    "name": "DSC_8743.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1C_fxeKUDK6Htn1kXMjxGsHQYQshsoWJi",
    "name": "DSC_8744.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1qT62O3SbmLPFthDiMQardTuXlj8HV77E",
    "name": "DSC_8745.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1XMx9xx08M6j7NXFAomWt9ri0uHzPrRmq",
    "name": "DSC_8746.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1EX_gsM5EHsfRSQqgmyqVLnED5eSrmvvW",
    "name": "DSC_8747.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "10Ndc5f3BK7_Nlg69WiRxO_qickdmmcG9",
    "name": "DSC_8748.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1iDq9GTcGW0my3CtT7gWkBzN8bBHWsmu5",
    "name": "DSC_8749.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Q2bHRHD_QzbvE7saQYBEOjme5yc0RXui",
    "name": "DSC_8750.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1PZE19OHTI_PxZD_FnadGkMZVnoRmamd5",
    "name": "DSC_8751.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ZiSIvtmsyCxNufiSEpMBuG9_-rbXUCgi",
    "name": "DSC_8752.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Ua_UGlnwfz7l_kQDICI_0UJltoDlLFwR",
    "name": "DSC_8753.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1sHtFXfki76gDWKhyEsNygE6x6yqyJOMX",
    "name": "DSC_8754.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1LdpqNDgcTPRcSQ6lOKzqBSiVkMEUQe7u",
    "name": "DSC_8755.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1juCbcmDwtA5-vU8sso5aCLDhYOKwlocp",
    "name": "DSC_8756.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1LZJqdJmvvAtlvyZmc3fGUi_C_Avo8IFv",
    "name": "DSC_8757.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "12AiIxLRNElppqB-rt4llpzCVOG-BHSCF",
    "name": "DSC_8758.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1MF6l9O2plxHe24TynKM9qDUbYcEgWzxI",
    "name": "DSC_8759.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1fARh5WU2VzMBcBnoLF_X7g0_4q2SPuHG",
    "name": "DSC_8760.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1_bfS4wy9a4zNZs_sSo1jlj1QHwTKCmbK",
    "name": "DSC_8761.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1aLB4-K3DSezM4ybgxw5CoDTkKOCPEUR7",
    "name": "DSC_8763.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1CuPZr1P7Wi40GhOMpwDO_XvUuH-IQf1h",
    "name": "DSC_8764.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1LODytPc0lOiuYna8Dbw5spOGtqBwjBUs",
    "name": "DSC_8765.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1AUUQB-cBOYSa6_h4hpa_foqW7cXkATO-",
    "name": "DSC_8767.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Y98lmGQdjWJwbALh7lAqPKks6qtDtXDi",
    "name": "DSC_8768.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "184uCNGOkKvT1ntcHmMNtn2Ctq1rW7HkW",
    "name": "DSC_8770.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1sdGzu9Tg_CDl0fh4eaSXgLNpSIhu-rB7",
    "name": "DSC_8771.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1yM9Kh3gb8g8tRqtsMLIn_F5jaKci_KZY",
    "name": "DSC_8772.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1qdT-3fTKEgRSVK7cirV5a5y7kuh5u6Md",
    "name": "DSC_8773.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1wHKpDFiehRgv0Yng8s2TBS-teaP_0eEy",
    "name": "DSC_8774.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1tilTejrjBtC2VUXQ7vMzQdjpEpbOJ-da",
    "name": "DSC_8775.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1mClXO7oIFRYH3uCzD5G3TxijZOYong_M",
    "name": "DSC_8777.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1_yRW6s5xH6wEK7C3u5VsltN0yzT1wezs",
    "name": "DSC_8778.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1k7uCf9tRbLKQr1SQoIpTgJqPTv3Te7Rw",
    "name": "DSC_8779.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1JA3FCGP87CgdA4ski5_frlabNWPnJUmV",
    "name": "DSC_8780.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1-jG3C20Q3CQkN1SvvuW8NeQtvKbmBaru",
    "name": "DSC_8781.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1Z8zWaCMcN7NFKbLTfu9vmGAvasl_TdaK",
    "name": "DSC_8782.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ZCfa0VuTJyQP5ayHESMzKdcNV_VE2yys",
    "name": "DSC_8783.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1cIe-5Zrzyt6aY2UyL4WDtOCzPMhbZcUM",
    "name": "DSC_8784.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1RkyY4TkKIDW8BYYhxAnmcl0OL3Cu2k8q",
    "name": "DSC_8785.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1QjsMkgsfGXNXkkXUXjk2jzekXofByK03",
    "name": "DSC_8786.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1S69YMksKtxNJBBUQOqvwRVjNTmxOH7Xr",
    "name": "DSC_8787.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1xpxU_S33QeG4Ek1Xp8QLC7uN92xlp0Aj",
    "name": "DSC_8788.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1psMY3xMkVUrIGZiW_k3sb9h4WgaLk6s_",
    "name": "DSC_8789.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1PCNrJ4cf_6D4aPpoZnUzW_hsPAJ6C_Ou",
    "name": "DSC_8791.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1MmNPFnbXhHLL7e7aLg4PKML-zgOTiEFy",
    "name": "DSC_8792.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ilschT43N4hfyd155mirOIWQPFSL65K3",
    "name": "DSC_8793.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ruozJUHclnBilL96OCbwqhwot6cAVDEY",
    "name": "DSC_8794.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1W1QR5-J_Bs7jiAwpf1nwi1yiJVy_KsE_",
    "name": "DSC_8795.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1tvUcGJIUEmsAI33eBsu3dUhtiLJ_g1dx",
    "name": "DSC_8796.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1041smQVzQkWQX9dvLu339DpdN9HKH00c",
    "name": "DSC_8797.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1EOD4TeRTx1pPtNElTfQQyyHq9JmgOFhN",
    "name": "DSC_8798.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1bLr_tIQrLKKk73IsX0H7ONht8Wmkqcg7",
    "name": "DSC_8799.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1fCeing1eWT12oXZIz85VRmCCH_RwLVmr",
    "name": "DSC_8800.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Hq4oXsV3eR24mEztmKzA3gMVrq6Nc1z4",
    "name": "DSC_8801.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "17JZY44gCHwyR1K3sFj0s17PKQduxgHI7",
    "name": "DSC_8802.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ASZMQchPlZ1JmHlABsREwn5W1q8OpQiN",
    "name": "DSC_8803.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "12qKePhTq5eBCpKilUqe5C0amDDooNGtZ",
    "name": "DSC_8804.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1dcrAIKFlohW9Z3F6Bn1_OmZCHNZENMHv",
    "name": "DSC_8805.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "119TGYEeS3-ZI8LdmuELZB1UhByQi-NXH",
    "name": "DSC_8806.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1dhyKqDXxgpmiW5PaKOQOTwtUW6O5zwyY",
    "name": "DSC_8807.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ASnat5NZtmG22IwmUH8mIl_vI3CgCCAu",
    "name": "DSC_8808.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1UOgm3-p0SYmTZl4XCN5AsFXcMpwGftr0",
    "name": "DSC_8809.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1DDQQ-3PMpnXUnSXAQ2H6rNcAsf1onDz4",
    "name": "DSC_8810.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ENYfT3pb0FDsln9lQSuMfHSNWqttbxLw",
    "name": "DSC_8811.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "14Hao3uL-AJSQNv_bn6oBl0Xm57L--Dsn",
    "name": "DSC_8812.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1SOF7RieYKZb7pWT2vx97LXcrs78i9KYl",
    "name": "DSC_8813.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1D4in4kklvNb2xsv5gh4_mOfZGpTetfis",
    "name": "DSC_8814.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "15nexVJNzq2gkakQZy981EK8wDQk3MCAH",
    "name": "DSC_8815.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Zcq44JK5XETjXjk0OD0ChiB2D5hC7D4b",
    "name": "DSC_8816.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1T8IWR_ZH0JP379g1SUm3kSEU7zqJomle",
    "name": "DSC_8817.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1HrsKPi8yPtV0jMuRdoVLAh9MMjFS5vzn",
    "name": "DSC_8818.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1QlDS3brTF4zRo17k-U9ohz0nqVuPebDw",
    "name": "DSC_8819.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1cU3K5L01PGD3ox5WY7tJQZPks8dSXKke",
    "name": "DSC_8820.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1VupwSXIGh7PbzrIWp9J8zqO4JW29mV5V",
    "name": "DSC_8821.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1UdX009mSga8h6xfc1ZM7Swyw-ynRebKP",
    "name": "DSC_8822.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1IRl9N9QRteTJD77_0lfRkcLy9lgGIInr",
    "name": "DSC_8823.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1S6UIoDHsHeXSgPrFssx-OhFMZMRQ3qn3",
    "name": "DSC_8824.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1lc3d3ctH21Rt8iVcbbaCsCqnWGgAebGr",
    "name": "DSC_8825.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1cA58JewI5vf0VUNV759AD444bUmvWa7q",
    "name": "DSC_8826.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1UmB819g97HotHPbdGoRliOWoNzeT__pv",
    "name": "DSC_8827.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ROYbIYehUCmxO_4p4QkfBSIh1YgXd8lC",
    "name": "DSC_8828.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1m1LbS8drxWGDt9Zi8nYAF0-4W5EsuFOt",
    "name": "DSC_8829.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1ZXx5n4c_y7Ac_0dxzfG27a3QxQyL0wC_",
    "name": "DSC_8830.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1Q6ISJasHAdPhrYzFz8FZZRAWkvJPFVGk",
    "name": "DSC_8831.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1dxDDJUlHKpX9tJ9CtigZ0QaJeg6ZWbvN",
    "name": "DSC_8832.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1vBCSv_oelz9fUih_KixjgajXrV_JIZwc",
    "name": "DSC_8833.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1aHx3YBAmUiFlaYDgZAfuwCbEST06AWCO",
    "name": "DSC_8834.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1bEOUSqXxk3UIJpt-nHCfGQBA5RYQrOaQ",
    "name": "DSC_8836.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "14A_WyGMfElib-r8ONNvqP66yS3ETXekp",
    "name": "DSC_8837.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1XkTU7kaNQUiZ5KSc3SvhnnoZ56_Q5ITX",
    "name": "DSC_8838.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1B60exiq9MXUXpSaVfn8vSrNk65IDzQ-Y",
    "name": "DSC_8839.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "groom-family"
  },
  {
    "id": "1TfiwvuPlHq2uXs2kg2VoGVRsm56SrkiI",
    "name": "DSC_8840.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "152NrCGK3Uch60QDDR6eazzbdk1GFy4Ds",
    "name": "DSC_8841.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1U1bCmrvZg5xTL4pATd20BXhNh72x7x8c",
    "name": "DSC_8842.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1k9c3WoImBWMwjw4oIMHRhFBgrU6cnG0g",
    "name": "DSC_8843.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1x0Z6zN09lB-Pu6WZFWLybju33wKE-fra",
    "name": "DSC_8844.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1x4sDMUJ7hP6r1wqOcm8HkU40sGY4khdF",
    "name": "DSC_8845.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1ccddO0MiVgyuEbADC3G5F_B7ZzrPFKl_",
    "name": "DSC_8846.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1uCXwBxi0ioybgrHYJ_vp_75WMuEuO6Jp",
    "name": "DSC_8847.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "19QeoxKH7Tjx0sOoWGKlaY5Hy8p1aLNB7",
    "name": "DSC_8848.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1l3MUn17DC-hJZ0uGcsi5C-mzsR1dkBjD",
    "name": "DSC_8849.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "148Vylh82xpbmP_FCU16eBntz00ZtrK28",
    "name": "DSC_8850.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1KSC_4B1J69JtZMr_foFHrZm-0aPnIPE8",
    "name": "DSC_8851.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1o6YEgNHmwta9LVjL7WQuhEsfXA1EY1-F",
    "name": "DSC_8852.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1OSokVJ-13hGcKSsAttzy_jD6QilYr3HU",
    "name": "DSC_8853.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1gmhvIvymA_NRBvHjWw-xcsP3XTjc_aRs",
    "name": "DSC_8854.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1-2qMCFF-7lsxV2yRPfmgYpgLCcMFSlV5",
    "name": "DSC_8855.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "11MbBZ9gqQk6u_WUjnshRhByet3elROiJ",
    "name": "DSC_8856.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1rXqW6GX5Cv6eaGUnwRyIpo7N6olTnKRv",
    "name": "DSC_8857.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1zPRoqyV79toqvCLk8333gSqLyhyJ8nSL",
    "name": "DSC_8858.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1ehOjPwag8eEkkAAN5BaJdIjJi0kTxy-0",
    "name": "DSC_8859.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1OgV6etDU3GrjJF6gWBUjFnbLs3PFV2T6",
    "name": "DSC_8860.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1htLinUr1jF81y3Ax6yTqUlwJ5n5ceH-B",
    "name": "DSC_8861.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1cq8puW5qODi75mRNpOElwt3WbUC43ovE",
    "name": "DSC_8862.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1OzYep1XVIqNOnQdZrtespiGzXm6g3JTx",
    "name": "DSC_8863.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1iUoXl1QeNzqCviWpNe8NZJz1rctb2UVf",
    "name": "DSC_8864.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1dC038kX1xV6FYPCW-lCPaC2tSHqrbAsS",
    "name": "DSC_8865.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1xZwHZSbNiDfCfo6ImYvdFncC_6ETeb18",
    "name": "DSC_8866.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1Pvw0SQBDnmG7eLECQgYqx5v1oNAXefw0",
    "name": "DSC_8867.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1cSqzSXxwDRRGXak2c4SZOjZp664WW0fz",
    "name": "DSC_8868.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1cXvTw317zN1D_V__eFojkExeSeN1zpWn",
    "name": "DSC_8869.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1j5_vBG1wJR_PvC-PtFlh8XySCLhq6zYc",
    "name": "DSC_8870.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1BdouEgryHM6283Y57GCSKRoUZVRlSLj6",
    "name": "DSC_8871.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1lYnzZDjFM_bOp2Nf_oGOA-XF62Nl0eWS",
    "name": "DSC_8872.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1oDheqb5tP9nH5qpvIO4OSgWnyQlKGP7c",
    "name": "DSC_8873.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1SD4SZV90GO2jmIDgQdo-kai4z2oWykXD",
    "name": "DSC_8874.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1Z7QFTFXk5bYexhszlnGlRqLpUpMWm1NO",
    "name": "DSC_8875.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1m_xAxqc6zmdxWn5rho-T7iWsU1VXdOdM",
    "name": "DSC_8876.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1PkvRWwn9XzfNZsg8acJc56ljGsYXpbZ3",
    "name": "DSC_8877.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1N6PNivZqAeKNtqZJyJvYLUQhX9d-Onyg",
    "name": "DSC_8878.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1eM2IzfZE2EXwE1s4mZemPikzFY9Ao1f0",
    "name": "DSC_8879.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "12v5yCe0DZzRCV0CL81Qih8xE1JaL6z7H",
    "name": "DSC_8880.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1o6lCJgDBezwaf2olcfnD-SX5342PVIfC",
    "name": "DSC_8881.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1leE-VVlrDlxmomNyRSNWXNUbSx2fFrIW",
    "name": "DSC_8882.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1BwB91nN9k57DGzl76KscwVjFF9yrkWqh",
    "name": "DSC_8883.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1cMtRZ1mBgSHTHbTBy34MluN0lQqA-XW_",
    "name": "DSC_8884.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1HoT_xX47O1kPTz19kcqAJPPwlqTd13zK",
    "name": "DSC_8889.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1bn--PjpTEQZA7FKDiJcNVDl6bc7gobek",
    "name": "DSC_8890.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1m8J-CLlbcyqc9vjVkIQfceW5RGiCok7H",
    "name": "DSC_8891.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1boCpyrQo50gcP9pvIEo8G7ryv2teyyl3",
    "name": "DSC_8892.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1hETeWK-cwIawcTu1eBYmapsEkzYqoMJ6",
    "name": "DSC_8893.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1JezhtX0l3JAQLSDI4t2Hld5uY8jfaHzj",
    "name": "DSC_8894.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1dMtzPTSzWGTCbFaVu1JwFRVkRbU7AJup",
    "name": "DSC_8895.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1g-FTDNJSs_VvuxRNf5u3duWLGwL3zjhb",
    "name": "DSC_8899.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "105ZlNqGc8dDtlvDxIKgWFTbCHQF7HX5H",
    "name": "DSC_8900.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1DrjsgIWfvKHBH9mqK4Mpm9iga2EwrBwF",
    "name": "DSC_8901.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1WqgNTzVq8fbkb2eL3iVNsCEyDGf38G_s",
    "name": "DSC_8902.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "194peyuFA_ETEoZJZVvad5nM2HchzNpzm",
    "name": "DSC_8903.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1uz0Wu3brYxNSRElI-cFbiHGuc6ls8yF0",
    "name": "DSC_8904.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1Tg7S31Ic2V0IaJBV0-h3-m3EJqqzSn3b",
    "name": "DSC_8905.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1RTclBpwPryJyiUGaxKirTeYgerSpTr8e",
    "name": "DSC_8906.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1nv4nhJWcFd2s1svKVM4qLm7zV19DOjm6",
    "name": "DSC_8907.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "17UwYAa10q-I_xKUSUTQea0FKj4bSpuXw",
    "name": "DSC_8908.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1xtyjYgvLaEbi9KSRtDIWnVkXidBynMBu",
    "name": "DSC_8909.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "14inlNwXAhKtLDKE4OO8Ybl6WLfSXdgeU",
    "name": "DSC_8910.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "13GY7wgnK6eeiBTlEQQgeAbmHLULNiwvk",
    "name": "DSC_8911.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1ihSvn8U22_QoA9ksC64PM0EkKWYfYT75",
    "name": "DSC_8912.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1YswyOz1BfVn04FwCqwsFnGtNIjmYdGwe",
    "name": "DSC_8913.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1wHy-Z_8_SVz5lSUndysiWd8hUO04xSqn",
    "name": "DSC_8914.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1MaPz_8I3l1VEXLGMxeVwyLKaH0YB8ooQ",
    "name": "DSC_8915.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1hjH2YDy2cKETvIbVNuDCCJS0PnwS1KRC",
    "name": "DSC_8916.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1uEZPT5HyT2hGI3DXZWobCY0nEIbftAGL",
    "name": "DSC_8917.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1N8BtSq9jPllmtLAgDKGlrVDul7CgYLLV",
    "name": "DSC_8918.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1tQuCqvJyH_sT8K0xqSzj9vX3RKCjVLTR",
    "name": "DSC_8919.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1hXCpsb2kZGQbbfdHmmBMrxhH44cUEgLJ",
    "name": "DSC_8920.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "16HBImcxKICdZqt1PjSkn9J2b0P2TDk44",
    "name": "DSC_8921.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1x376iw4iirn6O2SPsUqqVkOkK3MvtO82",
    "name": "DSC_8922.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1bQ8DB_YIN5OYog2zUsuzdFlv7_sKXSGX",
    "name": "DSC_8923.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1VrmQ9RTc79zrvM8uGi8Lo9kGOCsjLeY_",
    "name": "DSC_8924.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  },
  {
    "id": "1JFj0pk_O2P1ziUscn2YbOjxktgR2VrqV",
    "name": "DSC_8925.JPG",
    "mimeType": "image/jpeg",
    "size": 12000000,
    "category": "fulhar-couple"
  }
];

// Helper: Generates Google User Content URL
const getImageUrl = (id, width = 800) => `https://lh3.googleusercontent.com/d/${id}=w${width}`;

// 2. LocalStorage selection state
let selectedPhotoIds = JSON.parse(localStorage.getItem('selectedPhotoIds')) || [];

// 3. Application State
let activeView = 'book'; // 'book' or 'grid'
let activeSheetIndex = 0; // 0 to sheetsCount-1
let sheetsCount = 12; // Will be set dynamically by renderFlipbookPages()

// Lightbox slideshow state
let currentLightboxIndex = 0;
let lightboxPhotos = [...photosData];

// DOM elements
const loader = document.getElementById('loader');
const bgMusic = document.getElementById('bg-music');
const btnMusicToggle = document.getElementById('btn-music-toggle');
const btnViewBook = document.getElementById('btn-view-book');
const btnViewGrid = document.getElementById('btn-view-grid');
const sectionBook = document.getElementById('section-book');
const sectionGrid = document.getElementById('section-grid');
const weddingBook = document.getElementById('wedding-book');
const pageNumIndicator = document.getElementById('current-page-num');
const bookPrev = document.getElementById('book-prev');
const bookNext = document.getElementById('book-next');
const bookTimeline = document.getElementById('book-timeline');
const timelineTicks = document.getElementById('timeline-ticks');
const photosGrid = document.getElementById('photos-grid');
const selectedCount = document.getElementById('selected-count');
const selectionProgressFill = document.getElementById('selection-progress-fill');
const btnExportList = document.getElementById('btn-export-list');
const btnDownloadSelected = document.getElementById('btn-download-selected');
const btnClearSelection = document.getElementById('btn-clear-selection');
const favoritesBadgeCount = document.getElementById('favorites-badge-count');
const filterButtons = document.querySelectorAll('.filter-btn');
const logoButton = document.getElementById('logo-button');

// Lightbox Modal DOM
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxLoader = document.getElementById('lightbox-loader');
const lightboxFilename = document.getElementById('lightbox-filename');
const lightboxCategory = document.getElementById('lightbox-category');
const lightboxFavorite = document.getElementById('lightbox-favorite');
const lightboxDownload = document.getElementById('lightbox-download');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

// Toast DOM
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  renderFlipbookPages();
  setupTimelineTicks();
  renderPhotosGrid('all');
  updateSelectionUI();
  
  // Hide Loader after assets are initialised
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
  }, 1600);
  
  registerEventListeners();
});

/* ==========================================================================
   FLIPBOOK GENERATION & ANIMATION (DYNAMIC LAYOUT ENGINE)
   ========================================================================== */
function renderFlipbookPages() {
  weddingBook.innerHTML = '';
  const sheets = [];
  
  // Sheet 0: Front Cover & Page 1 (Title Text)
  sheets.push({
    front: {
      type: 'cover-front',
      bg: 'page-cover-front',
      content: `
        <div class="cover-accent-box">
          <h1 class="cover-script-title">Vikas & Krushi</h1>
          <p class="cover-serif-title">The Wedding Album</p>
          <div class="cover-ornament"><i class="fa-solid fa-hands-holding-child"></i></div>
          <p class="cover-date">June 2026</p>
          <button class="cover-open-prompt" onclick="flipNext()">Open Album</button>
        </div>
      `
    },
    back: {
      type: 'title-page',
      bg: 'watercolor-rose-bg',
      content: `
        <div class="corner-watercolor-leaves leaves-top-left"><svg viewBox="0 0 100 100" fill="var(--gold-solid)" opacity="0.15"><path d="M0,0 Q50,0 50,50 Q0,50 0,0 M50,50 Q100,50 100,100 Q50,100 50,50"/></svg></div>
        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
          <p class="page-subheader">Our Wedding Journey</p>
          <h2 class="page-header-title">Vikas & Krushi</h2>
          <div style="width: 60px; height: 1px; background: var(--gold-solid); margin: 1rem auto;"></div>
          <p class="page-quote">"Two souls with but a single thought, two hearts that beat as one."</p>
        </div>
        <div class="page-footer">
          <span>The Journey Begins</span>
          <span class="page-footer-num">1</span>
        </div>
      `
    }
  });

  // Highlight quotes to insert periodically
  const quotes = [
    "With you, there is no such thing as a boring day.",
    "A successful marriage requires falling in love many times, always with the same person.",
    "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
    "Two hearts, one soul, one beautiful journey together.",
    "To love and to be loved is to feel the sun from both sides.",
    "True love stories never have endings.",
    "Grow old along with me! The best is yet to be.",
    "Beautiful Moments: Here's to a lifetime of happiness."
  ];

  // Filter highlight photos for the flipbook (chronological order)
  const highlightNames = [
    'DSC_8613.JPG', 'DSC_8614.JPG', 'DSC_8615.JPG', 'DSC_8619.JPG', 'DSC_8620.JPG',
    'DSC_8622.JPG', 'DSC_8625.JPG', 'DSC_8627.JPG', 'DSC_8629.JPG', 'DSC_8632.JPG',
    'DSC_8633.JPG', 'DSC_8635.JPG', 'DSC_8636.JPG', 'DSC_8637.JPG', 'DSC_8641.JPG',
    'DSC_8642.JPG', 'DSC_8645.JPG', 'DSC_8646.JPG', 'DSC_8647.JPG', 'DSC_8648.JPG',
    'DSC_8649.JPG', 'DSC_8650.JPG', 'DSC_8651.JPG', 'DSC_8653.JPG', 'DSC_8654.JPG',
    'DSC_8655.JPG', 'DSC_8656.JPG', 'DSC_8657.JPG', 'DSC_8658.JPG', 'DSC_8659.JPG',
    'DSC_8660.JPG', 'DSC_8661.JPG', 'DSC_8662.JPG', 'DSC_8781.JPG', 'DSC_8785.JPG',
    'DSC_8800.JPG', 'DSC_8820.JPG', 'DSC_8836.JPG', 'DSC_8840.JPG', 'DSC_8850.JPG',
    'DSC_8860.JPG', 'DSC_8870.JPG', 'DSC_8880.JPG', 'DSC_8890.JPG', 'DSC_8900.JPG',
    'DSC_8910.JPG', 'DSC_8920.JPG', 'DSC_8923.JPG', 'DSC_8924.JPG', 'DSC_8925.JPG'
  ];
  const bookPhotos = photosData.filter(p => highlightNames.includes(p.name));

  // Dynamically group the highlight photos into spreads
  let photoIndex = 0;
  let pageNum = 2;
  
  // Use first couple shot as frontispiece in Sheet 1
  let introCouplePhotoId = "1FlvLsJbEDR3XIXfOmqOZZPOS_dcCcb6a"; // DSC_8655
  let firstGroomPhotoId = "1AY_FmppKF_jxf31sTMMjuXkY5g2KFeRV"; // DSC_8613
  
  sheets.push({
    front: {
      type: 'photo-single',
      bg: 'watercolor-blue-bg',
      content: `
        <p class="page-subheader">Vikas & Krushi</p>
        <div class="album-photo-frame frame-gold-border frame-arch" onclick="openLightbox('${introCouplePhotoId}')">
          <img src="${getImageUrl(introCouplePhotoId, 600)}" alt="Vikas & Krushi Portrait">
        </div>
        <div class="page-footer">
          <span>Loving Hearts</span>
          <span class="page-footer-num">${pageNum++}</span>
        </div>
      `
    },
    back: {
      type: 'photo-single',
      bg: 'watercolor-mint-bg',
      content: `
        <p class="page-subheader">Groom's Welcoming</p>
        <div class="album-photo-frame frame-gold-border" onclick="openLightbox('${firstGroomPhotoId}')">
          <img src="${getImageUrl(firstGroomPhotoId, 600)}" alt="Groom Portrait">
        </div>
        <div class="page-footer">
          <span>Groom Welcoming</span>
          <span class="page-footer-num">${pageNum++}</span>
        </div>
      `
    }
  });

  // Start highlights loop from index = 1 (since index 0 is firstGroomPhotoId and DSC_8655 is used as intro)
  photoIndex = 1;

  while (photoIndex < bookPhotos.length - 2) {
    // If we are in the Jaimala/Couple section (photos DSC_8840 onwards, or index >= 30 of highlights)
    const isCoupleSection = (photoIndex >= 30);
    const photosPerPage = isCoupleSection ? 2 : 4; // Display wedding ceremonies and couples larger

    // Left Page slice
    const leftPhotos = [];
    for (let i = 0; i < photosPerPage && photoIndex < bookPhotos.length - 2; i++) {
      leftPhotos.push(bookPhotos[photoIndex++]);
    }

    // Right Page slice
    const rightPhotos = [];
    for (let i = 0; i < photosPerPage && photoIndex < bookPhotos.length - 2; i++) {
      rightPhotos.push(bookPhotos[photoIndex++]);
    }

    if (leftPhotos.length === 0) break;

    // Background colors
    const bgLeft = isCoupleSection ? 'watercolor-rose-bg' : (pageNum % 4 === 0 ? 'watercolor-mint-bg' : 'watercolor-plain-bg');
    const bgRight = isCoupleSection ? 'watercolor-rose-bg' : (pageNum % 4 === 0 ? 'watercolor-blue-bg' : 'watercolor-plain-bg');

    // Left Layout Content
    let leftContent = '';
    if (leftPhotos.length === 1) {
      leftContent = `
        <p class="page-subheader">Wedding Moment</p>
        <div class="album-photo-frame frame-gold-border" onclick="openLightbox('${leftPhotos[0].id}')">
          <img src="${getImageUrl(leftPhotos[0].id, 600)}" alt="Wedding Moment">
        </div>
      `;
    } else if (leftPhotos.length === 2) {
      leftContent = `
        <p class="page-subheader">Fulhar Highlights</p>
        <div class="collage-2-col">
          <div class="album-photo-frame" onclick="openLightbox('${leftPhotos[0].id}')">
            <img src="${getImageUrl(leftPhotos[0].id, 400)}" alt="Wedding Portrait">
          </div>
          <div class="album-photo-frame" onclick="openLightbox('${leftPhotos[1].id}')">
            <img src="${getImageUrl(leftPhotos[1].id, 400)}" alt="Wedding Portrait">
          </div>
        </div>
      `;
    } else {
      leftContent = `
        <p class="page-subheader">Ceremony Memories</p>
        <div class="collage-3-grid">
          <div class="album-photo-frame grid-area-main" onclick="openLightbox('${leftPhotos[0].id}')">
            <img src="${getImageUrl(leftPhotos[0].id, 400)}" alt="Wedding Ceremony">
          </div>
          <div class="album-photo-frame grid-area-side1" onclick="openLightbox('${leftPhotos[1].id}')">
            <img src="${getImageUrl(leftPhotos[1].id, 400)}" alt="Wedding Ceremony">
          </div>
          <div class="album-photo-frame grid-area-side2" onclick="openLightbox('${leftPhotos[2].id}')">
            <img src="${getImageUrl(leftPhotos[2].id, 400)}" alt="Wedding Ceremony">
          </div>
        </div>
      `;
    }

    // Right Layout Content
    let rightContent = '';
    if (rightPhotos.length === 0) {
      rightContent = `
        <div style="flex: 1; display: flex; align-items: center; justify-content: center; text-align: center;">
          <p class="page-quote" style="font-size: 1rem;">"Together is a beautiful place to be."</p>
        </div>
      `;
    } else if (rightPhotos.length === 1) {
      rightContent = `
        <p class="page-subheader">Wedding Moment</p>
        <div class="album-photo-frame frame-gold-border" onclick="openLightbox('${rightPhotos[0].id}')">
          <img src="${getImageUrl(rightPhotos[0].id, 600)}" alt="Wedding Moment">
        </div>
      `;
    } else if (rightPhotos.length === 2) {
      const quoteIndex = Math.floor(photoIndex / 20) % quotes.length;
      rightContent = `
        <p class="page-subheader">Fulhar Highlights</p>
        <div class="collage-2-col">
          <div class="album-photo-frame" onclick="openLightbox('${rightPhotos[0].id}')">
            <img src="${getImageUrl(rightPhotos[0].id, 400)}" alt="Wedding Portrait">
          </div>
          <div class="album-photo-frame" onclick="openLightbox('${rightPhotos[1].id}')">
            <img src="${getImageUrl(rightPhotos[1].id, 400)}" alt="Wedding Portrait">
          </div>
        </div>
        <p class="page-quote" style="font-size: 0.85rem; margin-top: 0.6rem; max-width: 90%; line-height: 1.4;">"${quotes[quoteIndex]}"</p>
      `;
    } else {
      rightContent = `
        <p class="page-subheader">Ceremony Memories</p>
        <div class="collage-3-grid">
          <div class="album-photo-frame grid-area-main" onclick="openLightbox('${rightPhotos[0].id}')">
            <img src="${getImageUrl(rightPhotos[0].id, 400)}" alt="Wedding Ceremony">
          </div>
          <div class="album-photo-frame grid-area-side1" onclick="openLightbox('${rightPhotos[1].id}')">
            <img src="${getImageUrl(rightPhotos[1].id, 400)}" alt="Wedding Ceremony">
          </div>
          <div class="album-photo-frame grid-area-side2" onclick="openLightbox('${rightPhotos[2].id}')">
            <img src="${getImageUrl(rightPhotos[2].id, 400)}" alt="Wedding Ceremony">
          </div>
        </div>
      `;
    }

    sheets.push({
      front: {
        type: 'spread-left',
        bg: bgLeft,
        content: `
          ${leftContent}
          <div class="page-footer">
            <span>Vikas & Krushi</span>
            <span class="page-footer-num">${pageNum++}</span>
          </div>
        `
      },
      back: {
        type: 'spread-right',
        bg: bgRight,
        content: `
          ${rightContent}
          <div class="page-footer">
            <span>Vikas & Krushi</span>
            <span class="page-footer-num">${pageNum++}</span>
          </div>
        `
      }
    });
  }

  // Final Highlight spread (Grand closing couple shot)
  sheets.push({
    front: {
      type: 'photo-collage-2',
      bg: 'watercolor-plain-bg',
      content: `
        <p class="page-subheader">Lifetime of Togetherness</p>
        <div class="collage-2-col">
          <div class="album-photo-frame frame-gold-border" onclick="openLightbox('${bookPhotos[bookPhotos.length - 2].id}')">
            <img src="${getImageUrl(bookPhotos[bookPhotos.length - 2].id, 400)}" alt="Bride & Groom Portrait">
          </div>
          <div class="album-photo-frame frame-gold-border" onclick="openLightbox('${bookPhotos[bookPhotos.length - 1].id}')">
            <img src="${getImageUrl(bookPhotos[bookPhotos.length - 1].id, 400)}" alt="Bride & Groom Portrait">
          </div>
        </div>
        <p class="page-quote" style="font-size: 0.95rem; margin-top: 0.8rem;">"Beautiful Moments: Here's to a lifetime of happiness."</p>
        <div class="page-footer">
          <span>Happily Ever After</span>
          <span class="page-footer-num">${pageNum++}</span>
        </div>
      `
    },
    back: {
      type: 'cover-back',
      bg: 'page-cover-back',
      content: `
        <div class="back-cover-content">
          <div class="back-cover-mandala"><i class="fa-solid fa-om"></i></div>
          <h2 class="back-cover-text">Thank You</h2>
          <p style="font-family: var(--font-serif); font-size: 0.85rem; letter-spacing: 2px; color: var(--gold-solid); margin-top: 1rem; text-transform: uppercase;">Vikas & Krushi</p>
        </div>
      `
    }
  });

  // Dynamically record total sheet count
  sheetsCount = sheets.length;
  
  sheets.forEach((sheet, idx) => {
    const pageEl = document.createElement('div');
    pageEl.className = 'page';
    pageEl.dataset.sheetIndex = idx;
    
    // Set initial z-index stack
    pageEl.style.zIndex = sheetsCount - idx;
    
    pageEl.innerHTML = `
      <div class="page-face front ${sheet.front.bg}">
        ${sheet.front.content}
      </div>
      <div class="page-face back ${sheet.back.bg}">
        ${sheet.back.content}
      </div>
    `;
    
    weddingBook.appendChild(pageEl);
  });
  
  updateFlipbookUI();
}

function updateFlipbookUI() {
  const pages = document.querySelectorAll('.page');
  
  pages.forEach((page, idx) => {
    const sheetIndex = parseInt(page.dataset.sheetIndex);
    
    if (sheetIndex < activeSheetIndex) {
      // Sheet flipped to left
      page.classList.add('flipped');
      page.classList.remove('active-page');
      page.style.zIndex = sheetIndex;
    } else {
      // Sheet lying on right
      page.classList.remove('flipped');
      if (sheetIndex === activeSheetIndex) {
        page.classList.add('active-page');
      } else {
        page.classList.remove('active-page');
      }
      page.style.zIndex = sheetsCount - sheetIndex;
    }
  });

  // Enable/disable page buttons
  bookPrev.disabled = (activeSheetIndex === 0);
  bookNext.disabled = (activeSheetIndex === sheetsCount - 1);
  
  // Set Timeline slider value
  bookTimeline.value = activeSheetIndex;
  bookTimeline.max = sheetsCount - 1;
  
  // Update timeline tick highlights
  const tickLabels = document.querySelectorAll('.timeline-tick-label');
  tickLabels.forEach((label, idx) => {
    if (idx === activeSheetIndex) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
  
  // Update human readable page indicators
  if (activeSheetIndex === 0) {
    pageNumIndicator.textContent = "Cover";
  } else if (activeSheetIndex === sheetsCount - 1) {
    pageNumIndicator.textContent = "End Cover";
  } else {
    pageNumIndicator.textContent = `Spread ${activeSheetIndex} (Pages ${2 * activeSheetIndex} - ${2 * activeSheetIndex + 1})`;
  }
}

function flipPrev() {
  if (activeSheetIndex > 0) {
    const prevPage = document.querySelector(`.page[data-sheet-index="${activeSheetIndex - 1}"]`);
    if (prevPage) {
      prevPage.classList.add('flipping');
      activeSheetIndex--;
      updateFlipbookUI();
      setTimeout(() => {
        prevPage.classList.remove('flipping');
      }, 800);
    }
  }
}

function flipNext() {
  if (activeSheetIndex < sheetsCount - 1) {
    const currentPage = document.querySelector(`.page[data-sheet-index="${activeSheetIndex}"]`);
    if (currentPage) {
      currentPage.classList.add('flipping');
      activeSheetIndex++;
      updateFlipbookUI();
      setTimeout(() => {
        currentPage.classList.remove('flipping');
      }, 800);
    }
  }
}

/* ==========================================================================
   TIMELINE TICK GENERATOR
   ========================================================================== */
function setupTimelineTicks() {
  timelineTicks.innerHTML = '';
  
  // Custom timeline ticks representing actual highlights
  const ticks = [
    'Cover', 'Intro', 'Groom Entrance', 'Family Greeting', 'Greetings', 
    'Portraits', 'Couple Intro', 'Fulhar Exchange', 'Garlands Ceremony', 'Couple Photoshoot', 'End'
  ];
  
  ticks.forEach((tick, idx) => {
    const tickEl = document.createElement('span');
    tickEl.className = 'timeline-tick-label';
    if (idx === 0) tickEl.classList.add('active');
    tickEl.textContent = tick;
    tickEl.addEventListener('click', () => {
      activeSheetIndex = Math.min(idx, sheetsCount - 1);
      updateFlipbookUI();
    });
    timelineTicks.appendChild(tickEl);
  });
  
  bookTimeline.max = sheetsCount - 1;
}

/* ==========================================================================
   PHOTO SELECTION GRID (WEEDING WORKSPACE)
   ========================================================================== */
function renderPhotosGrid(filter = 'all') {
  photosGrid.innerHTML = '';
  let filteredPhotos = [];
  
  if (filter === 'all') {
    filteredPhotos = photosData;
  } else if (filter === 'favorites') {
    filteredPhotos = photosData.filter(p => selectedPhotoIds.includes(p.id));
  } else {
    filteredPhotos = photosData.filter(p => p.category === filter);
  }
  
  if (filteredPhotos.length === 0) {
    photosGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: #aaa; font-family: var(--font-serif); max-width: 500px; margin: 0 auto;">
        <i class="fa-regular fa-heart-crack" style="font-size: 3.2rem; margin-bottom: 1.5rem; color: var(--gold-solid); display: block;"></i>
        <h3 style="font-size: 1.6rem; color: var(--gold-solid); margin-bottom: 0.8rem; font-weight: 500;">No photos</h3>
        <p style="font-size: 0.95rem; line-height: 1.6; font-family: var(--font-sans); color: #888;">No favorited photos found. Start hearting photos in the grid to see them here.</p>
      </div>
    `;
    return;
  }
  
  filteredPhotos.forEach(photo => {
    const isSelected = selectedPhotoIds.includes(photo.id);
    const card = document.createElement('div');
    card.className = `photo-card loading ${isSelected ? 'selected' : ''}`;
    card.dataset.photoId = photo.id;
    
    card.innerHTML = `
      <img src="${getImageUrl(photo.id, 400)}" alt="${photo.name}" loading="lazy" onload="this.parentElement.classList.remove('loading')">
      <button class="card-heart-btn" aria-label="Favorite this photo" onclick="toggleSelectPhoto(event, '${photo.id}')">
        <i class="${isSelected ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
      </button>
      <div class="card-overlay">
        <span class="card-filename">${photo.name}</span>
        <i class="fa-solid fa-magnifying-glass-plus" style="color: var(--gold-solid); font-size: 0.95rem;"></i>
      </div>
    `;
    
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.card-heart-btn')) {
        openLightbox(photo.id, filteredPhotos);
      }
    });
    
    photosGrid.appendChild(card);
  });
}

function toggleSelectPhoto(event, photoId) {
  if (event) {
    event.stopPropagation();
  }
  
  const idx = selectedPhotoIds.indexOf(photoId);
  const card = document.querySelector(`.photo-card[data-photo-id="${photoId}"]`);
  
  if (idx === -1) {
    selectedPhotoIds.push(photoId);
    if (card) {
      card.classList.add('selected');
      card.querySelector('.card-heart-btn i').className = 'fa-solid fa-heart';
    }
  } else {
    selectedPhotoIds.splice(idx, 1);
    if (card) {
      card.classList.remove('selected');
      card.querySelector('.card-heart-btn i').className = 'fa-regular fa-heart';
    }
  }
  
  localStorage.setItem('selectedPhotoIds', JSON.stringify(selectedPhotoIds));
  updateSelectionUI();
  
  const activeFilterBtn = document.querySelector('.filter-btn.active');
  if (activeFilterBtn && activeFilterBtn.dataset.filter === 'favorites') {
    renderPhotosGrid('favorites');
  }
}

function updateSelectionUI() {
  const count = selectedPhotoIds.length;
  selectedCount.textContent = count;
  favoritesBadgeCount.textContent = count;
  
  // Progress Bar scaled to target of 50 photos
  const pct = Math.min((count / 50) * 100, 100);
  selectionProgressFill.style.width = `${pct}%`;
  
  // Sidebar actions active/inactive
  const hasSelection = count > 0;
  btnExportList.disabled = !hasSelection;
  btnDownloadSelected.disabled = !hasSelection;
  btnClearSelection.disabled = !hasSelection;
}

function clearSelection() {
  if (confirm('Are you sure you want to deselect all photos?')) {
    selectedPhotoIds = [];
    localStorage.removeItem('selectedPhotoIds');
    
    document.querySelectorAll('.photo-card').forEach(card => {
      card.classList.remove('selected');
      const heartIcon = card.querySelector('.card-heart-btn i');
      if (heartIcon) heartIcon.className = 'fa-regular fa-heart';
    });
    
    updateSelectionUI();
    
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    if (activeFilterBtn && activeFilterBtn.dataset.filter === 'favorites') {
      renderPhotosGrid('favorites');
    }
    
    showToast('Selection cleared');
  }
}

/* ==========================================================================
   EXPORT & DOWNLOAD UTILITIES
   ========================================================================== */
function exportSelectionToClipboard() {
  const selectedPhotos = photosData.filter(p => selectedPhotoIds.includes(p.id));
  const textList = selectedPhotos.map(p => p.name).join('\n');
  
  navigator.clipboard.writeText(textList)
    .then(() => {
      showToast('Selected file names copied to clipboard!');
    })
    .catch(() => {
      showToast('Copy failed, please download selection file.');
    });
}

async function downloadSelectedPhotos() {
  const selectedPhotos = photosData.filter(p => selectedPhotoIds.includes(p.id));
  if (selectedPhotos.length === 0) {
    showToast('No photos selected to download!');
    return;
  }
  
  showToast(`Downloading ${selectedPhotos.length} photos. Please allow multiple downloads in browser if prompted.`);
  
  for (let i = 0; i < selectedPhotos.length; i++) {
    const photo = selectedPhotos[i];
    const url = `https://drive.google.com/uc?export=download&id=${photo.id}`;
    
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Throttling delay to allow browser to register separate file downloads
    await new Promise(resolve => setTimeout(resolve, 800));
  }
  
  showToast('All downloads initiated!');
}

/* ==========================================================================
   IMMERSIVE LIGHTBOX MODAL
   ========================================================================== */
function openLightbox(photoId, customPhotosList = null) {
  lightboxPhotos = customPhotosList || photosData;
  currentLightboxIndex = lightboxPhotos.findIndex(p => p.id === photoId);
  
  if (currentLightboxIndex === -1) {
    currentLightboxIndex = 0;
  }
  
  lightbox.classList.add('active');
  renderLightboxImage();
}

function renderLightboxImage() {
  const photo = lightboxPhotos[currentLightboxIndex];
  if (!photo) return;
  
  lightboxLoader.style.display = 'block';
  lightboxImg.classList.remove('loaded');
  
  lightboxImg.src = getImageUrl(photo.id, 1600);
  lightboxFilename.textContent = photo.name;
  
  const cat = photo.category === 'groom-family' ? 'Groom & Family' : 'Fulhar & Couple';
  lightboxCategory.textContent = cat;
  
  const isFav = selectedPhotoIds.includes(photo.id);
  lightboxFavorite.querySelector('i').className = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  lightboxFavorite.style.color = isFav ? 'var(--gold-solid)' : '#fff';
  
  lightboxDownload.href = `https://drive.google.com/uc?export=download&id=${photo.id}`;
}

function handleLightboxFavorite() {
  const photo = lightboxPhotos[currentLightboxIndex];
  if (!photo) return;
  
  toggleSelectPhoto(null, photo.id);
  
  const isFav = selectedPhotoIds.includes(photo.id);
  lightboxFavorite.querySelector('i').className = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  lightboxFavorite.style.color = isFav ? 'var(--gold-solid)' : '#fff';
}

function lightboxPrevImage() {
  if (currentLightboxIndex > 0) {
    currentLightboxIndex--;
  } else {
    currentLightboxIndex = lightboxPhotos.length - 1;
  }
  renderLightboxImage();
}

function lightboxNextImage() {
  if (currentLightboxIndex < lightboxPhotos.length - 1) {
    currentLightboxIndex++;
  } else {
    currentLightboxIndex = 0;
  }
  renderLightboxImage();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
}

/* ==========================================================================
   TOASTS & NOTIFICATIONS
   ========================================================================== */
function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

/* ==========================================================================
   EVENT LISTENERS
   ========================================================================== */
function registerEventListeners() {
  btnViewBook.addEventListener('click', () => {
    if (activeView !== 'book') {
      activeView = 'book';
      btnViewGrid.classList.remove('active');
      btnViewBook.classList.add('active');
      sectionGrid.classList.remove('active-view');
      sectionBook.classList.add('active-view');
      updateFlipbookUI();
    }
  });

  btnViewGrid.addEventListener('click', () => {
    if (activeView !== 'grid') {
      activeView = 'grid';
      btnViewBook.classList.remove('active');
      btnViewGrid.classList.add('active');
      sectionBook.classList.remove('active-view');
      sectionGrid.classList.add('active-view');
      renderPhotosGrid('all');
    }
  });
  
  logoButton.addEventListener('click', () => {
    activeView = 'book';
    btnViewGrid.classList.remove('active');
    btnViewBook.classList.add('active');
    sectionGrid.classList.remove('active-view');
    sectionBook.classList.add('active-view');
    activeSheetIndex = 0;
    updateFlipbookUI();
  });

  btnMusicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play().then(() => {
        btnMusicToggle.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        btnMusicToggle.style.background = 'var(--gold-metallic)';
        btnMusicToggle.style.color = 'var(--burgundy-deep)';
        showToast('Background music playing');
      }).catch(err => {
        console.error("Audio playback error: ", err);
        showToast('Click again to allow music playback');
      });
    } else {
      bgMusic.pause();
      btnMusicToggle.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
      btnMusicToggle.style.background = 'rgba(255, 255, 255, 0.05)';
      btnMusicToggle.style.color = 'var(--gold-solid)';
      showToast('Music muted');
    }
  });

  bookPrev.addEventListener('click', flipPrev);
  bookNext.addEventListener('click', flipNext);
  
  bookTimeline.addEventListener('input', (e) => {
    activeSheetIndex = parseInt(e.target.value);
    updateFlipbookUI();
  });

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPhotosGrid(btn.dataset.filter);
    });
  });

  btnExportList.addEventListener('click', exportSelectionToClipboard);
  btnDownloadSelected.addEventListener('click', downloadSelectedPhotos);
  btnClearSelection.addEventListener('click', clearSelection);

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', lightboxPrevImage);
  lightboxNext.addEventListener('click', lightboxNextImage);
  lightboxFavorite.addEventListener('click', handleLightboxFavorite);
  
  lightboxImg.addEventListener('load', () => {
    lightboxLoader.style.display = 'none';
    lightboxImg.classList.add('loaded');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        lightboxPrevImage();
      } else if (e.key === 'ArrowRight') {
        lightboxNextImage();
      }
    } 
    else if (activeView === 'book') {
      if (e.key === 'ArrowLeft') {
        flipPrev();
      } else if (e.key === 'ArrowRight') {
        flipNext();
      }
    }
  });
}
window.flipNext = flipNext;
window.openLightbox = openLightbox;
window.toggleSelectPhoto = toggleSelectPhoto;
