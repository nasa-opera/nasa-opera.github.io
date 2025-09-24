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


| Product Name | Product Version | Release Date     | SAS Version                       | PGE Version |
| ------------ | --------------- | ---------------- |-----------------------------------| ----------- |
| DIST-HLS     | 1.0             | 2023-02-28       | [0.1.0 (zip)][dist_hls_sas_0.1.0] | n/a         |
| DIST-S1      | 1.0             | expected 2026    |                                   |             |


The following table has links to supporting documentation for each product.

| Product Name   | ATBD                                       | Product Spec                                   | Earthdata Search Link                                  |
|----------------|--------------------------------------------|------------------------------------------------|--------------------------------------------------------|
| DIST-ALERT-HLS | [DIST-ALERT-HLS ATBD][DIST-ALERT-HLS ATBD] | [DIST-HLS Product Spec][DIST-HLS Product Spec] | [OPERA_L3_DIST-ALERT-HLS_V1][dist_alert_hls_earthdata] |
| DIST-ANN-HLS   | [DIST-ANN-HLS ATBD][DIST-ANN-HLS ATBD]     | [DIST-HLS Product Spec][DIST-HLS Product Spec] | [OPERA_L3_DIST-ANN-HLS_V1][dist_ann_hls_earthdata]     |
| DIST-S1        |                                            |                                                | expected 2026                                          |                                      |


## Dynamic Surface Water Extent (DSWx) Products

Product releases for the Dynamic Surface Water eXtent product suite. Products will come from multiple sources:  Harmonized Landsat & Sentinel-2 data (DSWx-HLS) product, Sentinel-1 data (DSWx-S1), and NISAR data (DSWx-NI).  You can find more information about these products here: [DSWx Product Suite](https://www.jpl.nasa.gov/go/opera/products/dswx-product-suite)


| Product Name | Product Version | Release Date     | SAS Version                       | PGE Version                                                                |
| ------------ | --------------- | ---------------- |-----------------------------------|----------------------------------------------------------------------------|
| DSWx-HLS     | 1.0             | 2023-04-10       | [1.0.1 (zip)][dswx_hls_sas_1.0.1] | [1.0.2 (zip)][dswx_hls_pge_1.0.2]                                          |
| DSWx-S1      | 1.0             | 2024-08-16       | [1.1.0 (zip)][dswx_s1_sas_1.1.0]  | [3.0.2 (docker)][dswx_s1_pge_docker_3.0.2] [3.0.2 (zip)][dswx_s1_pge_3.0.2]|
| DSWx-NI      | 1.0             | expected 2026    |                                   |                                                                            |


The following table has links to supporting documentation for each product.

| Product Name | ATBD                           | Product Spec                                 | Earthdata Search Link                    |
| ------------ |--------------------------------|----------------------------------------------|------------------------------------------|
| DSWx-HLS     | [DSWx-HLS ATBD][DSWx-HLS ATBD] |[DSWx-HLS Product Spec][DSWx-HLS Product Spec]|[OPERA_L3_DSWX-HLS_V1][dswx_hls_earthdata]|
| DSWx-S1      |                                |[DSWx-S1 Product Spec][DSWx-S1 Product Spec]  |[OPERA_L3_DSWX-S1_V1][dswx_s1_earthdata]  |
| DSWx-NI      |                                |                                              | expected 2026                            |


## Land Surface Displacement (DISP) Products

Product releases for the Surface Displacement (DISP) product suite.  These products will be made from both Sentinel-1 data (DISP-S1) and NISAR data (DISP-NI).  You can find more information about these products here: [DISP Product Suite](https://www.jpl.nasa.gov/go/opera/products/disp-product-suite).

| Product Name | Product Version | Release Date     | SAS Version | PGE Version                                                                |
| ------------ |-----------------| ---------------- |-------------|----------------------------------------------------------------------------|
| DISP-S1      | 1.0             | expected 2025 |             | [3.0.6 (docker)][disp_s1_pge_docker_3.0.6] [3.0.6 (zip)][disp_s1_pge_3.0.6] |
| DISP-NI      | 1.0             | expected 2026 |             |                                                                            |


The following table has links to supporting documentation for each product.

| Product Name | ATBD  | Product Spec                                       | Earthdata Search Link |
| ------------ |-------|----------------------------------------------------|-----------------------|
| DISP-S1      |       | [DISP-S1 Product Spec][DISP-S1 Product Spec]       | expected 2025         |
| DISP-NI      |       |                                                    | expected 2026         |


## Radiometric Terrain Corrected (RTC) Products

Product releases for the Radiometric Terrain Corrected product suite.  Currently, these products are only created from Sentinel-1 data (RTC-S1).  You can find more information about these products here: [RTC Product Suite](https://www.jpl.nasa.gov/go/opera/products/rtc-product)

| Product Name | Product Version | Release Date | SAS Version                                                               | PGE Version                                                               |
| ------------ | --------------- | ------------ | ------------------------------------------------------------------------- |---------------------------------------------------------------------------|
| RTC-S1       | 1.0.4           | 2024-05-23   | [1.0.4 (docker)][rtc_s1_sas_docker_1.0.4] [1.0.4 (zip)][rtc_s1_sas_1.0.4] | [2.1.3 (docker)][rtc_s1_pge_docker_2.1.3] [2.1.3 (zip)][rtc_s1_pge_2.1.3] |
| RTC-S1       | 1.0.2           | 2024-03-18   | [1.0.2 (docker)][rtc_s1_sas_docker_1.0.2] [1.0.2 (zip)][rtc_s1_sas_1.0.2] | [2.1.1 (docker)][rtc_s1_pge_docker_2.1.1] [2.1.1 (zip)][rtc_s1_pge_2.1.1] |


The following table has links to supporting documentation for each product.

| Product Name         | ATBD | Product Spec                                             | ASF Landing Page Link                           |
| -------------------- |------|----------------------------------------------------------|-------------------------------------------------|
| RTC-S1               |      | [RTC-S1 Product Spec][RTC-S1 Product Spec]               | [OPERA_L2_RTC-S1_V1][rtc_s1_data]               |
| RTC-S1 Static Layers |      | [RTC-S1-STATIC Product Spec][RTC-S1-STATIC Product Spec] | [OPERA_L2_RTC-S1-STATIC_V1][rtc_s1_static_data] |

## Coregistered Single-Look Complex (CSLC) Products

Product releases for the Coregistered Single-look Complex product suite.  Currently, these products are only created from Sentinel-1 data (CSLC-S1).  You can find more information about these products here: [CSLC Product Suite](https://www.jpl.nasa.gov/go/opera/products/cslc-product-suite)


| Product Name | Product Version | Release Date | SAS Version                | PGE Version                                                            |
| ------------ | --------------- | ------------ | -------------------------- | -------------------------------------------------------------------- |
| CSLC-S1      | 1.1             | 2025-05-02   | [0.5.6 (docker)][cslc_s1_sas_docker_0.5.6] [0.5.6 (zip)][cslc_s1_sas_0.5.6] | [2.1.3 (docker)][cslc_s1_pge_docker_2.1.3] [2.1.3 (zip)][cslc_s1_pge_2.1.3] |
| CSLC-S1      | 1.1             | 2024-03-15   | [0.5.5 (zip)][cslc_s1_sas_0.5.5] | [2.1.1 (zip)][cslc_s1_pge_2.1.1] |
| CSLC-S1      | 1.0             | 2023-10-04   | [0.5.4 (zip)][cslc_s1_sas_0.5.4] | [2.1.0 (zip)][cslc_s1_pge_2.1.0]                                           |


The following table has links supporting documentation for each product.

| Product Name          | ATBD | Product Spec                                               | ASF Landing Page Link                             |
| --------------------- |------|------------------------------------------------------------| ------------------------------------------------- |
| CSLC-S1               |      | [CSLC-S1 Product Spec][CSLC-S1 Product Spec]               | [OPERA_L2_CSLC-S1_V1][cslc_s1_data]               |
| CSLC-S1 Static Layers |      | [CSLC-S1-STATIC Product Spec][CSLC-S1-STATIC Product Spec] | [OPERA_L2_CSLC-S1-STATIC_V1][cslc_s1_static_data] |

## Ancillary Input Products

The following table lists ancillary input products that are used by the various OPERA product lines. 
Apart from the Static Layer products, these are not generated by the OPERA pipeline, but are used as inputs to the OPERA products.

| Ancillary Name                        | Location                                                                          | Applicable Product Types            | Other Information                                                                                                                                                                        |
|---------------------------------------|-----------------------------------------------------------------------------------|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Dynamic Elevation Map (DEM)           | [Instructions (Copernicus)][Dynamic Elevation Map]                                | All DSWx, All DISP, CSLC-S1, RTC-S1 | OPERA utilizes a modified version of the GLO-30 v1.1 DEM. DEM region must overlap footprint of input granules.                                                                           |
| SLC S1 Burst Database                 | [Download (ASF)][SLC S1 Burst Database]                                           | CSLC-S1, RTC-S1                     |                                                                                                                                                                                          |
| S1 Orbit Ephemeris                    | [Instructions (Copernicus)][S1 Orbit Files] [Instructions (AWS S3)][S1 POD Files] | CSLC-S1, RTC-S1                     | Either AUX_RESORB or AUX_POEORB types are supported. Time range covered by orbit files must encompass time range of the input S1 SLC.                                                    |
| Ionosphere TEC                        | [Download (CDDIS)][Ionosphere TEC]                                                | CSLC-S1, DISP-S1                    | Either JPLG or JPRG types are supported. Download link requires a valid Earthdata Login account. One Ionosphere file is required for each acquisition date in the input set of granules. |
| Global Landcover 2019 (100 m)         | [Instructions (Copernicus)][Global Landcover]                                     | DSWx-HLS                            |                                                                                                                                                                                          |
| ESA WorldCover 2020 (10 m)            | [Download (ESA)][Worldcover]                                                      | All DSWx                            |                                                                                                                                                                                          |
| CSLC Static Layers                    | [Instructions (ASF)][cslc_s1_static_data]                                         | DISP-S1                             | One Static Layer product is required for each unique burst ID in the set of input CSLC products.                                                                                         |
| Height Above Nearest Drainage (HAND)  | [Instructions (Earthdata)][GLO-30 HAND] [Instructions (AWS S3)][GLO-30 HAND S3]   | DSWx-S1, DSWx-NI                    |                                                                                                                                                                                          |
| GLAD Global Land Cover 2020           | [Instructions (GLAD)][GLAD Landcover]                                             | DSWx-S1, DSWx-NI                    |                                                                                                                                                                                          |
| JRC Global Surface Water 1984-2021    | [Instructions (JRC)][JRC Global Surface Water]                                    | DSWx-S1, DSWx-NI                    |                                                                                                                                                                                          |
| DISP-S1 Water Mask                    | TBD                                                                               | DISP-S1                             |                                                                                                                                                                                          |
| MGRS Tile Database                    | TBD                                                                               | DSWx-S1, DSWx-NI                    |                                                                                                                                                                                          |
| DSWx-S1 MGRS Tile Collection Database | TBD                                                                               | DSWx-S1                             |                                                                                                                                                                                          |
| DSWx-NI MGRS Tile Collection Database | TBD                                                                               | DSWx-NI                             |                                                                                                                                                                                          |
| DISP-S1 Frame To Burst Database       | TBD                                                                               | DISP-S1                             |                                                                                                                                                                                          |
| DISP-S1 Reference Data Database       | TBD                                                                               | DISP-S1                             |                                                                                                                                                                                          |
| Algorithm Parameters YAML             | TBD                                                                               | DSWx-S1, DSWx-NI, DISP-S1           |                                                                                                                                                                                          |


<!-- Product Spec Links  -->
[CSLC-S1 Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/OPERA_CSLC-S1_ProductSpec_v1.0.0_D-108278_Initial_2023-09-11_URS321269.pdf
[CSLC-S1-STATIC Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/ProductSpec_CSLC-S1-STATIC.pdf
[RTC-S1 Product Spec]: https://asf.alaska.edu/wp-content/uploads/2023/10/OPERA-RTC-S1-ProductSpec-v1.0.3-D-108758-RevB-2024-03-21-URS324227.pdf
[RTC-S1-STATIC Product Spec]: https://asf.alaska.edu/wp-content/uploads/2023/10/OPERA-RTC-S1-STATIC-ProductSpec-v1.0.2-D-108764-2023-11-06-URS321268.pdf
[DSWx-HLS Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/ProductSpec_DSWX_URS309746.pdf
[DSWx-S1 Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/OPERA_DSWx-S1_Product_Spec_v1.0.0_D-108761_RevA_2024-08-16_.pdf
[DIST-HLS Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/ProductSpec_DIST_HLS.pdf
[DISP-S1 Product Spec]: https://d2pn8kiwq2w21t.cloudfront.net/documents/ProductSpec_DISP_Beta.pdf
[DIST-ALERT-HLS Product Spec]: https://lpdaac.usgs.gov/documents/1766/OPERA_DIST_HLS_Product_Specification_V1.pdf
[DIST-ANN-HLS Product Spec]: https://lpdaac.usgs.gov/documents/1766/OPERA_DIST_HLS_Product_Specification_V1.pdf


<!-- Software Release Links  -->
[disp_s1_pge_3.0.6]: https://github.com/nasa/opera-sds-pge/releases/tag/3.0.6
[dist_hls_sas_0.1.0]: https://github.com/gladumd/OPERA_DIST/releases/tag/v0.1.0
[dswx_hls_sas_1.0.1]: https://github.com/nasa/PROTEUS/releases/tag/v1.0.1
[dswx_hls_pge_1.0.2]: https://github.com/nasa/opera-sds-pge/releases/tag/1.0.2
[dswx_s1_sas_1.1.0]: https://github.com/opera-adt/DSWX-SAR/releases/tag/v1.1
[dswx_s1_pge_3.0.2]: https://github.com/nasa/opera-sds-pge/releases/tag/3.0.2
[dswx_s1_pge_3.0.0]: https://github.com/nasa/opera-sds-pge/releases/tag/3.0.0

[rtc_s1_sas_1.0.4]: https://github.com/opera-adt/RTC/releases/tag/v1.0.4
[rtc_s1_sas_1.0.2]: https://github.com/opera-adt/RTC/releases/tag/v1.0.2
[rtc_s1_sas_1.0.4]: https://github.com/opera-adt/RTC/releases/tag/v1.0.4
[rtc_s1_pge_2.1.3]: https://github.com/nasa/opera-sds-pge/releases/tag/2.1.3-rtc-s1
[rtc_s1_pge_2.1.1]: https://github.com/nasa/opera-sds-pge/releases/tag/2.1.1

[cslc_s1_sas_0.5.6]: https://github.com/opera-adt/COMPASS/releases/tag/v0.5.6
[cslc_s1_sas_0.5.5]: https://github.com/opera-adt/COMPASS/releases/tag/v0.5.5
[cslc_s1_sas_0.5.6]: https://github.com/opera-adt/COMPASS/releases/tag/v0.5.6
[cslc_s1_sas_0.5.4]: https://github.com/opera-adt/COMPASS/releases/tag/v0.5.4
[cslc_s1_pge_2.1.3]: https://github.com/nasa/opera-sds-pge/releases/tag/2.1.3
[cslc_s1_pge_2.1.1]: https://github.com/nasa/opera-sds-pge/releases/tag/2.1.1
[cslc_s1_pge_2.1.0]: https://github.com/nasa/opera-sds-pge/releases/tag/2.1.0

<!-- Docker Image Links  -->
[cslc_s1_pge_docker_2.1.3]: https://github.com/nasa/opera-sds-pge/pkgs/container/opera-sds-pge%2Fopera_pge%2Fcslc_s1/429064752?tag=2.1.3
[cslc_s1_pge_docker_2.1.1]: https://github.com/nasa/opera-sds-pge/pkgs/container/opera-sds-pge%2Fopera_pge%2Fcslc_s1/411436017?tag=2.1.1
[disp_s1_pge_docker_3.0.6]: https://github.com/nasa/opera-sds-pge/pkgs/container/opera-sds-pge%2Fopera_pge%2Fdisp_s1/411521220?tag=3.0.6
[dswx_s1_pge_docker_3.0.2]: https://github.com/nasa/opera-sds-pge/pkgs/container/opera-sds-pge%2Fopera_pge%2Fdswx_s1/411456658?tag=3.0.2
[rtc_s1_sas_docker_1.0.2]: https://github.com/opera-adt/RTC/pkgs/container/rtc-s1/402238290?tag=final_1.0.2
[rtc_s1_sas_docker_1.0.4]: https://github.com/orgs/opera-adt/packages/container/rtc-s1/453506756?tag=final_1.0.4
[rtc_s1_pge_docker_2.1.3]: https://github.com/nasa/opera-sds-pge/pkgs/container/opera-sds-pge%2Fopera_pge%2Frtc_s1/431121479?tag=2.1.3
[rtc_s1_pge_docker_2.1.1]: https://github.com/nasa/opera-sds-pge/pkgs/container/opera-sds-pge%2Fopera_pge%2Frtc_s1/411441644?tag=2.1.1
[cslc_s1_pge_docker_2.1.1]: https://github.com/orgs/nasa/packages?repo_name=opera-sds-pge&version=2.1.1
[cslc_s1_sas_docker_0.5.6]: https://github.com/opera-adt/COMPASS/pkgs/container/cslc_s1/453509430?tag=final_0.5.6
[dswx_hls_sas_docker_1.0.2]: https://github.com/orgs/opera-adt/packages/container/dswx-s1/453512756?tag=final_patch_1.1
[dswx_hls_pge_docker_1.0.2]: https://github.com/orgs/nasa/packages?repo_name=opera-sds-pge&version=1.0.2


[dswx_s1_sas_docker_1.1]: https://github.com/opera-adt/DSWX-SAR/pkgs/container/dswx-s1/453512756?tag=final_patch_1.1

<!-- Earthdata Search Links  -->
[dist_alert_hls_earthdata]: https://lpdaac.usgs.gov/products/opera_l3_dist-alert-hls_v1v001/
[dist_ann_hls_earthdata]: https://lpdaac.usgs.gov/products/opera_l3_dist-ann-hls_v1v001/
[dswx_hls_earthdata]: https://podaac.jpl.nasa.gov/dataset/OPERA_L3_DSWX-HLS_V1
[dswx_s1_earthdata]: https://podaac.jpl.nasa.gov/dataset/OPERA_L3_DSWX-S1_V1/
[cslc_s1_data]: https://asf.alaska.edu/datasets/daac/opera/
[cslc_s1_static_data]: https://asf.alaska.edu/datasets/daac/opera/
[rtc_s1_data]: https://asf.alaska.edu/datasets/daac/opera/
[rtc_s1_static_data]: https://asf.alaska.edu/datasets/daac/opera/

<!-- Ancillaries -->
[Dynamic Elevation Map]: https://doi.org/10.5270/ESA-c5d3d65
[SLC S1 Burst Database]: https://cumulus.asf.alaska.edu/PUBLIC/DATA/OPERA/burst_db_0.2.0_230831-bbox-only.sqlite
[S1 Orbit Files]: https://documentation.dataspace.copernicus.eu/Data/SentinelMissions/Sentinel1.html#sentinel-1-precise-orbit-determination-pod-products
[S1 POD Files]: https://registry.opendata.aws/s1-orbits/
[Ionosphere TEC]: https://cddis.nasa.gov/archive/gnss/products/ionex
[Global Landcover]: https://doi.org/10.2909/c6377c6e-76cc-4d03-8330-628a03693042
[Worldcover]: https://doi.org/10.5281/zenodo.5571936
[GLO-30 HAND]: https://www.earthdata.nasa.gov/learn/tutorials/global-30-m-hand
[GLO-30 HAND S3]: https://registry.opendata.aws/glo-30-hand/
[GLAD Landcover]: https://storage.googleapis.com/earthenginepartners-hansen/GLCLU2000-2020/v2/download.html
[JRC Global Surface Water]: https://global-surface-water.appspot.com/download

<!-- ATBD -->
[DSWx-HLS ATBD]: https://archive.podaac.earthdata.nasa.gov/podaac-ops-cumulus-docs/web-misc/opera/atbd/DSWx-HLS_ATBD_V1_4_DAAC_Distribution.pdf
[DIST-ALERT-HLS ATBD]: https://lpdaac.usgs.gov/documents/1835/OPERA_DIST_ATBD__V1.pdf
[DIST-ANN-HLS ATBD]: https://lpdaac.usgs.gov/documents/1835/OPERA_DIST_ATBD__V1.pdf
