---
sidebar_position: 2
id: products
title: Products
sidebar_label: Products
---

# Products

Welcome to the **OPERA** products documentation page. This section provides detailed information about OPERA products and their associated releases.

### Definitions

*SAS*:  Science Algorithm Software (SAS), the core software responsible for generating the product.

*PGE*:  Product Generation Executable (PGE), a wrapper around the SAS responsible for being a uniform interface for the OPERA pipeline software and for generating metadata files used by the DAAC.  Not applicable for the DIST-HLS product suite.


## Land Surface Disturbance (DIST) Products

Product releases for the Land Surface Disturbance product suite.  One set of products will be created using optical imagery from Harmonized Landsat & Sentinel-2 data (DIST-HLS), and another set will be created from radar imagery from Sentinel-1 data (DIST-S1).  You can find more information about these products here: [DIST Product Suite](https://www.jpl.nasa.gov/go/opera/products/dist-product-suite)


| Product Name | Product Version | Release Date     | SAS Version                 | PGE Version         |
| ------------ | --------------- | ---------------- | ------------------          | ------------------- |
| DIST-HLS     | 1.0             | 2023-02-28       | [0.1.0][dist_hls_sas_0.1.0] | n/a                 |
| DIST-S1      | 1.0             | expected 2026-03 |                             |                     |


The following table has links to files and supporting documentation for each product.

| Product Name   | Ancillaries | ATBD | Product Spec | Earthdata Search Link                                  |
| ------------   | ----------- | ---- | ------------ | ---------------------                                  |
| DIST-ALERT-HLS |             |      |              | [OPERA_L3_DIST-ALERT-HLS_V1][dist_alert_hls_earthdata] |
| DIST-ANN-HLS   |             |      |              | [OPERA_L3_DIST-ANN-HLS_V1][dist_ann_hls_earthdata]     |
| DIST-S1        |             |      |              |                                                        |


## Dynamic Surface Water Extent (DSWx) Products

Product releases for the Dynamic Surface Water eXtent product suite. Products will come from multiple sources:  Harmonized Landsat & Sentinel-2 data (DSWx-HLS) product, Sentinel-1 data (DSWx-S1), and NISAR data (DSWx-NI).  You can find more information about these products here: [DSWx Product Suite](https://www.jpl.nasa.gov/go/opera/products/dswx-product-suite)

| Product Name | Product Version | Release Date     | SAS Version                 | PGE Version                 |
| ------------ | --------------- | ---------------- | ------------------          | -------------------         |
| DSWx-HLS     | 1.0             | 2023-04-10       | [1.0.1][dswx_hls_sas_1.0.1] | [1.0.2][dswx_hls_pge_1.0.2] |
| DSWx-S1      | 1.0             | expected 2024-09 |                             |                             |
| DSWx-NI      | 1.0             | expected 2026-06 |                             |                             |


The following table has links to files and supporting documentation for each product.

| Product Name | Ancillaries | ATBD | Product Spec | Earthdata Search Link                      |
| ------------ | ----------- | ---- | ------------ | --------------                             |
| DSWx-HLS     |             |      |              | [OPERA_L3_DSWX-HLS_V1][dswx_hls_earthdata] |
| DSWx-S1      |             |      |              |                                            |
| DSWx-NI      |             |      |              |                                            |


## Land Surface Displacement (DISP) Products

Product releases for the Surface Displacement (DISP) product suite.  These products will be made from both Sentinel-1 data (DISP-S1) and NISAR data (DISP-NI).  You can find more information about these products here: [DISP Product Suite](https://www.jpl.nasa.gov/go/opera/products/disp-product-suite).

| Product Name | Product Version | Release Date     | SAS Version        | PGE Version         |
| ------------ | --------------- | ---------------- | ------------------ | ------------------- |
| DISP-S1      | 1.0             | expected 2024-12 |                    |                     |
| DISP-NI      | 1.0             | expected 2026-09 |                    |                     |


The following table has links to files and supporting documentation for each product.

| Product Name | Ancillaries | ATBD | Product Spec | Earthdata Search Link |
| ------------ | ----------- | ---- | ------------ | --------------        |
| DISP-S1      |             |      |              |                       |
| DISP-NI      |             |      |              |                       |


## Radiometric Terrain Corrected (RTC) Products

Product releases for the Radiometric Terrain Corrected product suite.  Currently these products are only created from Sentinel-1 data (RTC-S1).  You can find more information about these products here: [RTC Product Suite](https://www.jpl.nasa.gov/go/opera/products/rtc-product)

| Product Name | Product Version | Release Date     | SAS Version               | PGE Version               |
| ------------ | --------------- | ---------------- | ------------------        | -------------------       |
| RTC-S1       | 1.0             | 2023-10-04       | [1.0.2][rtc_s1_sas_1.0.2] | [2.1.1][rtc_s1_pge_2.1.1] |


The following table has links to files and supporting documentation for each product.

| Product Name         | Ancillaries | ATBD | Product Spec | ASF Landing Page Link                         |
| ------------         | ----------- | ---- | ------------ | --------------                                |
| RTC-S1               |             |      |              | [OPERA_L2_RTC-S1_V1][rtc_s1_data]                                              |
| RTC-S1 Static Layers |             |      |              | [OPERA_L2_RTC-S1-STATIC_V1][rtc_s1_data] |

## Coregistered Single-Look Complex (CSLC) Products

Product releases for the Coregistered Single-look Complex product suite.  Currently these products are only created from Sentinel-1 data (CSLC-S1).  You can find more information about these products here: [CSLC Product Suite](https://www.jpl.nasa.gov/go/opera/products/cslc-product-suite)

| Product Name | Product Version | Release Date     | SAS Version                | PGE Version                |
| ------------ | --------------- | ---------------- | ------------------         | -------------------        |
| CSLC-S1      | 1.1             | 2024-04-01       | [0.5.5][cslc_s1_sas_0.5.5] | [2.1.1][cslc_s1_pge_2.1.1] |
| CSLC-S1      | 1.0             | 2023-10-04       | [0.5.4][cslc_s1_sas_0.5.4] | [2.1.0][cslc_s1_pge_2.1.0] |
    

The following table has links to files and supporting documentation for each product.

| Product Name          | Ancillaries | ATBD | Product Spec | ASF Landing Page Link                             |
| ------------          | ----------- | ---- | ------------ | --------------                                    |
| CSLC-S1               |             |      |              | [OPERA_L2_CSLC-S1_V1][cslc_s1_data]               |
| CSLC-S1 Static Layers |             |      |              | [OPERA_L2_CSLC-S1-STATIC_V1][cslc_s1_static_data] |



<!-- Product Spec Links  -->
[CSLC-S1 Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/OPERA_CSLC-S1_ProductSpec_v1.0.0_D-108278_Initial_2023-09-11_URS321269.pdf
[RTC-S1 Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/ProductSpec_RTC-S1.pdf
[DSWx-HLS Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/ProductSpec_DSWX_URS309746.pdf
[DIST-HLS Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/ProductSpec_DIST_HLS.pdf

<!-- Software Release Links  -->
[dist_hls_sas_0.1.0]: https://github.com/gladumd/OPERA_DIST/releases/tag/v0.1.0
[dswx_hls_sas_1.0.1]: https://github.com/nasa/PROTEUS/releases/tag/v1.0.1
[dswx_hls_pge_1.0.2]: https://github.com/nasa/opera-sds-pge/releases/tag/1.0.2
[rtc_s1_sas_1.0.2]: https://github.com/opera-adt/RTC/releases/tag/v1.0.2
[rtc_s1_pge_2.1.1]: https://github.com/nasa/opera-sds-pge/releases/tag/2.1.1
[cslc_s1_sas_0.5.5]: https://github.com/opera-adt/COMPASS/releases/tag/v0.5.5
[cslc_s1_sas_0.5.4]: https://github.com/opera-adt/COMPASS/releases/tag/v0.5.4
[cslc_s1_pge_2.1.1]: https://github.com/nasa/opera-sds-pge/releases/tag/2.1.1
[cslc_s1_pge_2.1.0]: https://github.com/nasa/opera-sds-pge/releases/tag/2.1.0

<!-- Docker Image Links  -->
[cslc_s1_pge_docker_2.1.1]: https://github.com/orgs/nasa/packages?repo_name=opera-sds-pge&version=2.1.1
[rtc_s1_pge_docker_2.1.1]: https://github.com/orgs/nasa/packages?repo_name=opera-sds-pge&version=2.1.1
[dswx_hls_pge_docker_1.0.2]: https://github.com/orgs/nasa/packages?repo_name=opera-sds-pge&version=1.0.2

<!-- Earthdata Search Links  -->

[dist_alert_hls_earthdata]: https://lpdaac.usgs.gov/products/opera_l3_dist-alert-hls_v1v001/
[dist_ann_hls_earthdata]: https://lpdaac.usgs.gov/products/opera_l3_dist-ann-hls_v1v001/
[dswx_hls_earthdata]: https://podaac.jpl.nasa.gov/dataset/OPERA_L3_DSWX-HLS_V1
[cslc_s1_data]: https://asf.alaska.edu/datasets/daac/opera/
[cslc_s1_static_data]: https://asf.alaska.edu/datasets/daac/opera/
[rtc_s1_data]: https://asf.alaska.edu/datasets/daac/opera/
[rtc_s1_static_data]: https://asf.alaska.edu/datasets/daac/opera/


