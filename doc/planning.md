Formulae:

<page_name>  (<short_note>)
	- <component>	- <description>
				> <features_need_to_learn>
	- <component>
		...
	> <buttons_or_other_essential_elements>


## Features need to learn
	Hamburg Navbar
	[Zoom in, Box shadow] card
	Modal (for [add-to-cart, update-order-status, view-product, log-out])

# BEAD MERCH PAGE PLAN

## Customer Side

Homepage / Products
	- Header
	- Category
		Products
			ProductCard
	- Footer

Track your Order
	- Header
	- TrackForm
		TrackRecord
	- Footer

Cart
	- Header
	- Cart
		CartItems
	- Footer
	> Proceed to Check Out

Billing
	- Header (empty)
	- BillingForm
	- OrderList (Minified)
	> [Back, Confirm Order]

Receipt
	- Header (only title)
	- OrderDetails (plus Tracking ID)
	- OrderList
	> [Copy Track ID to Clipboard, Go Back to Homepage]

## Employee Side

Login
	- LoginForm

Home / Dashboard
	- Header
	- Analytics Summary
	- New/Recent Orders
	- Popular Products
	- Footer

Orders
	- Header
	- Orders (With tabs by Order Status)
	- Footer

Order
	- Header
	- OrderDetails
	- OrderList
	> [Update Order Status, Print Order]

Products
	- Header
	- ProductList [View, Modify]

Product (Modify)
	- Header
	- ProductForm

ProductNew
	- Header
	- ProductForm
Account
	- Username
	- Password