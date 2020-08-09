# PreRequisites

	1. Modern Office 365 sharepoint site with Library Name EffortManagement having field
		1.Title(Single line of text ) 
		2.Effort(Number) 
		3.Description(Multiple lines of text) 
		4.Category(Managed Metadata) 
		5.Approver(Person or Group )
	2. Winfows environment with following applications installed
		1. Node JS
		2. Yoman,gulp 
	3. Taxonomy group of name Category to be configured at admin center
 # Installation procedure
 
 ## preparing Package file
 	1. clone the repository to local file share
 	2. navigate to directory and type npm install to install all development and application dependencies.
 	3. type followng commands to prepare the package. 
 		1.gulp build --ship
 		2.gulp bundle --ship
 		3.gulp package-solution --ship
     4. copy the solution file(.sppkg) file available in the sharepoint directory
  ## installing package in app catalog site
  	1. Open the SharePoint app catalog site
	2. Upload the solution package (sppkg) from sharepoint\solution folder to app catalog.
	3. Make sure the URL is pointing to SharePoint library.
	4. Click Deploy
##  installing app in the site 
	1. navigate to sharepoint site mentioned in the pre-requisites.
	2. go to site contents--> new -->app -->select the time management application.
	3. click on trust button in the trust dialog window.
## adding app to site page
	1. Go to Site pages --> new --> site page.
	2. click on + icon to add the webpart.
	3. select the time management app
	4. save the page with proper name

