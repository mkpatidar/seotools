seotool.controller('DashboardCtrl', function($scope,$sce,$http,$timeout) {

	$scope.web_domain_url = "";
	if(typeof web_domain_url !== 'undefined'){
		$scope.web_domain_url = web_domain_url;
	}else{
		$scope.web_domain_url = "";
	}
	$scope.html_data_json = {};
	$scope.data_processing_onserver = false;
	$scope.html_data = {
	  "seoexplode": {
		  "heading1": {
		    "count1": 1,
		    "h1": [
		      "WELCOME TO SEOEXPLODE Inc."
		    ]
		  },
		  "meta_keywords": [
		    "SEO Company",
		    " SEO Services",
		    " Risk Free SEO",
		    " SEO Companies",
		    " SEO Service"
		  ],
		  "canonical_value": "",
		  "content": "SEO Company \u2013 Professional SEO Services by SEOExplode Inc 1-888-9-EXPLODE Home Service Offerings Organic SEO Local SEO On-site SEO Link building Conversion Optimization Content Marketing Pay Per Click Penalty Recovery SEO Consulting Other Offerings SEO Web Design & Hosting Social Media Optimization Reputation Management Content Writing Video Creation Video Optimization Visitor Re-targeting Partnerships About Us Contact Us MenuHomeService Offerings - Organic SEO - Local SEO - On-site SEO - Link building - Conversion Optimization - Content Marketing - Pay Per Click - Penalty Recovery - SEO ConsultingOther Offerings - SEO Web Design & Hosting - Social Media Optimization - Reputation Management - Content Writing - Video Creation - Video Optimization - Visitor Re-targetingPartnershipsAbout UsContact Us Get a Risk Free SEO Quote WELCOME TO SEOEXPLODE Inc. Full Service SEO Company Welcome to seoexplode.com, a high end full service SEO Company providing professional SEO Services to all web masters looking to increase their websites search engine visibility. Whether you are looking for organic SEO or a variety of Internet marketing services we highly suggest you click or call us today for a no obligation free quote on how we can help to increase the traffic to your website. Our cutting edge seo services and marketing strategies have been proven for a number of years and we currently have many clients ranking all over the web which has helped their business prosper tremendously from our service offerings. If you have a new site, an old site, a website that is currently not performing well or even a penalized site from a previous SEO company we would be more than happy to help!   We provide custom tailored campaigns, not predetermined \u201cpackages\u201d that are generic, usually not effective and only drain your precious advertising dollars. We will thoroughly examine your website from every aspect analyzing over 80 on site and off site SEO factors in order to determine the best course of action. Due to our flexibility we are able to accommodate most marketing budgets and at the same time are able to deliver a potent campaign that will take your website from no where to the top of the search results in a reasonable time frame. We provide a live demonstration to all of our prospective clients in order to show them exactly the strategies we will be implementing and some of our current impressive case studies. We feel that transparency is extremely important therefor we are 100% clear as to what we do and how we do it. This creates a more trusting relationship between us and our clients which is something we truly appreciate and try to uphold throughout our proceedings.   Professional & Affordable SEO Services Without a doubt there are many SEO companies on the web but we can guarantee that there are none like us. With 10 years of industry experience we have learned a lot through the years and are able to use that knowledge, our tools and experience to assist others in achieving higher rankings in search engines and other verticals. The easiest way to learn more is to contact us today for a free demo / consultation. One of our SEO experts will schedule a live demonstration and go over everything with you step by step from A-Z of how we operate, what we do, how we do it , pricing, project time line, monthly reports and everything else you should expect from us. Please fill out or contact form which is located to your right or call us today to schedule your free demonstration with an expert SEO services consultant.   The way our demo process operates is we will send you an email invitation to a net meeting VIA a link. After connecting to the net meeting we will call you to formally introduce ourselves, walk you through the presentation and answer any questions that you may have. By utilizing this method we have created a system that works ideally for our clients and us, this we we are both on the same page starting day 1 in order to create and maintain a long lasting business relationship. Just like in any relationship, communication is obviously very important, in order to furthermore increase trust and relationship building we provide full detailed reports on all of the work that we perform. This way every invested penny is justified and fully understood which seems to be an industry problem that we are trying to reduce and hopefully one day eliminate.   Related Service Offerings We do not only provide SEO and Internet marketing services but we also offer a wide array of industry related services such as SEO friendly web design, reputation management, visitor re-targeting, pay per click, affiliate marketing, on site SEO, website audits, social media optimization, conversion optimization and several others. Not only is SEOExplode capable of ranking your website but they can create a SEO and user friendly site, host it, optimize it, market it and maintain if for you. If you want to get rid of all the hassle of finding a trustworthy SEO and or web design you can eliminate that headache and condense everything with a company that you trust and delivers non comparable results to any other experience you may have had previously. Fill out our contact form today to schedule your immediate presentation as available time slots are popular and limited.   Thank you,   SEOExplode Inc. Team   seoexplode.com \u201cRankings that are out of this world.\u201d Your Trusted SEO Company Since May 2005. Share this : Request a Quote! If you are a human and are seeing this field, please leave it blank. Fields marked with a * are required. Full Name : * Website : * Phone No.: No Phone no. = No Response * Email * Service Type: * Search Engine Optimization SEO Consulting Other Monthly Budget : * $595 $995 $1,995 $3,995 $10,000+ $20,000+ Keywords you would like to rank for Comments: 15-9 * Useful Links Home Service Offerings Other Offerings SEO Tools Partnerships About Us Contact Us SEO Blog Get in Touch 41-A West Merrick Rd., Valley Stream, NY 11580 Suite 2 Ph:(516) 887-1929 Fax:1-888-724-4569 info@seoexplode.com Find us on Facebook Twitter Linkdin Google Plus Google Plus Page Search Site",
		  "img_src": [
		    "https://www.seoexplode.com/wp-content/uploads/2013/12/logo.jpg",
		    "https://www.seoexplode.com/wp-content/themes/display-child/images/banner_btn.png",
		    "https://www.seoexplode.com/wp-content/uploads/2013/12/SEOProcess.png"
		  ],
		  "title": "SEO Company \u2013 Professional SEO Services by SEOExplode Inc",
		  "meta_description": "SEOExplode is a high quality SEO Company offering professional SEO services to  web masters looking to increase traffic to their website. Call 888-9-Explode",
		  "favicon": "https://www.seoexplode.com/wp-content/uploads/2014/08/favicon.png",
		  "alt": [
		    "SEOExplode",
		    "Contact Us",
		    "SEOExplode Process"
		  ],
		  "inlinks": [
		    "https://www.seoexplode.com/",
		    "https://www.seoexplode.com/feed/",
		    "https://www.seoexplode.com/",
		    "https://www.seoexplode.com/service-offerings/",
		    "https://www.seoexplode.com/organic-seo/",
		    "https://www.seoexplode.com/local-seo/",
		    "https://www.seoexplode.com/on-site-seo/",
		    "https://www.seoexplode.com/link-building/",
		    "https://www.seoexplode.com/conversion-optimization/",
		    "https://www.seoexplode.com/content-marketing/",
		    "https://www.seoexplode.com/pay-per-click/",
		    "https://www.seoexplode.com/penalty-recovery/",
		    "https://www.seoexplode.com/seo-consulting/",
		    "https://www.seoexplode.com/other-offerings/",
		    "https://www.seoexplode.com/seo-web-design-hosting/",
		    "https://www.seoexplode.com/social-media-optimization/",
		    "https://www.seoexplode.com/reputation-management/",
		    "https://www.seoexplode.com/content-writing/",
		    "https://www.seoexplode.com/video-creation/",
		    "https://www.seoexplode.com/video-optimization/",
		    "https://www.seoexplode.com/visitor-re-targeting/",
		    "https://www.seoexplode.com/partnerships/",
		    "https://www.seoexplode.com/about-us/",
		    "https://www.seoexplode.com/contact-us/",
		    "https://www.seoexplode.com/",
		    "https://www.seoexplode.com/service-offerings/",
		    "https://www.seoexplode.com/other-offerings/",
		    "https://www.seoexplode.com/seo-tools/",
		    "https://www.seoexplode.com/partnerships/",
		    "https://www.seoexplode.com/about-us/",
		    "https://www.seoexplode.com/contact-us/",
		    "https://www.seoexplode.com/blog/"
		  ],
		  "heading6": {
		    "h6": [
		      
		    ],
		    "count6": 0
		  },
		  "encoding": "text/html; charset=UTF-8",
		  "outlinks": [
		    "https://www.facebook.com/pages/SEOExplode/115123942168584",
		    "https://twitter.com/seoexplodecom",
		    "https://www.linkedin.com/in/explodeseo",
		    "https://plus.google.com/+Seoexplode",
		    "/contact-us",
		    "https://www.addtoany.com/share",
		    "https://www.facebook.com/pages/SEOExplode/115123942168584",
		    "https://twitter.com/seoexplodecom",
		    "https://www.linkedin.com/in/explodeseo",
		    "https://plus.google.com/118254400470033141322/",
		    "#"
		  ],
		  "length_of_meta_description": 156,
		  "length_of_the_title": 57,
		  "language": "en",
		  "heading2": {
		    "count2": 8,
		    "h2": [
		      "Full Service SEO Company",
		      "Professional & Affordable SEO Services",
		      "Related Service Offerings",
		      "Request a Quote!",
		      "Useful Links",
		      "Get in Touch",
		      "Find us on",
		      "Search Site"
		    ]
		  },
		  "doctype": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">",
		  "heading3": {
		    "h3": [
		      "seoexplode.com \u201cRankings that are out of this world.\u201d Your Trusted SEO Company Since May 2005."
		    ],
		    "count3": 1
		  },
		  "heading4": {
		    "h4": [
		      
		    ],
		    "count4": 0
		  },
		  "heading5": {
		    "h5": [
		      
		    ],
		    "count5": 0
		  }
		},
		"hardhero": {
		  "heading1": {
		    "count1": 0,
		    "h1": [
		      
		    ]
		  },
		  "meta_keywords": [
		    "Internet Blog",
		    "SEO Blog",
		    "Internet Marketing Guide"
		  ],
		  "canonical_value": "",
		  "content": "www.hardhero.com www.hardhero.com Contact Us Legal Terms Subscribe Visit Us How the Pawn Shop Business Works Logan Dylan October 22, 2016 Pawn shops provide money by giving personal loans and reselling items such as jewelry. Gaining interest on loans and profits on retail income is the main income sources for the regular business model for a pawn shop. Pawn shops typically intend to bring forth an overall net profit of 15 to 25% at the minimum. \u201cPawn\u201d and \u201ccollateral loan\u201d practically mean the same thing Pawnbrokers lend cash for items such as jewelry, electronics, household items, and more. Some pawn shops may only accept certain kinds of items though. Loans are founded on the value of the collateral. When a client pays back the loan, their item is returned to them. A client may also take to give up the collateral as payment in full. Pawn shops also give extensions and renewals for loans. Pawnbrokers give people a quick, favorable and confidential manner to borrow money. The pawnbroker takes on the risk that an item might have been acquired through illegal means. Nonetheless, laws protect both the people and broker from inadvertently handling stolen items. These laws often necessitate that the pawnbroker set up positive determination of the seller. In some districts, pawn shops must provide a list of all recently pawned items and any connected serial number to police, so the police can find out if any of the items have been taken illegally.  This is actually how Metropolitan Pawnbrokers, a popular pawn shop in New York, works for over 25 years to ensure the safety of their customers. The first revenue root for a pawn shop is income traced from making loans and gaining interest on the loan balances. A pawn shop gives a loan to a person who hands over an item of value (such as jewelry or home appliances) that serves as collateral for the loan. The sum a pawnshop is consenting to lend is based primarily on the value of the item, but it can also be considerably affected by the pawnshop\u2019s actual inventory at the time of the loan. Pawn shops make loans at considerably higher interest rates than banks usually charge for personal debt The risk of loan failure payment is much higher, and numerous individuals hunting loans from pawnshop cannot suffice for conventional bank loans. Interest rates of pawnshops mostly vary. State law regulates the sum of interest that a pawnshop is permitted to charge, and regulations vary in different states. A short-term cash necessity can be met with no legal consequences if the loan is not paid. Pawnbroking enforces discipline on the borrower. Loans are by and large made on a monthly basis. By the end of the month, to avoid forfeiting the item he has put up as collateral, the individual must either pay the loan charge, or just pay the monthly interest charge, which lets him extend the loan for another month. Pawn shops are, in general, willing to increase loans as long as the interest is paid, as they may in time collect more in interest charges than the sum of the loan itself, while still keeping the loan collateral against balance. On how much a person can lend against an item, pawn shops typically look to contribute no more than 40 to 50% of the proposed resale worth of the item committed as collateral. The pawnshop proprietor also has to take into account possible costs of storage, repair, and advertisement, as well as screening general overhead expenses. The second direct source financial gain for a pawn shop is retail sales Merchandise regard items that the pawnshop has acquired straight-out from individuals and items that were committed as collateral by customers who then later defaulted on their loans, thereby confiscating the pledged item to the pawn shop. Pawnshops give more money to straight-out purchase items than to other items, for the simple reason that they\u2019ll have more for direct resale and they can more accurately estimate their profit. Items that the store sooner or later acquires through loan faulting may generate higher or lower profits, depending on the items and the duration of time the loans were conveyed prior to default. If a loan was kept up for a prolonged period of time, the pawnshop may have made a profit just from assembling the interest payments made preceding default. Nevertheless, the duration of time may also mean that the item has depreciated in value to the point where it has small or no resale worth. We Pawn or Buy Everything of Value! Need money now? We can help! New York Metropolitan Pawnbrokers, jewelry, watch, diamond and golden buyer. For more details about pawn shops contact to us. Loan Loan, Pawn, Pawn Shop, Pawnbrokers, Pawnshops Helpful Tips Before Going to a Pawn Shop Zachary KING October 21, 2016 Whether you are buying or selling, you need to prepare several things before deciding to head out to the nearest pawn shop in your area. Going to the shop unprepared can cost you more regrets than the amount of cash you take home. No matter how badly you need to get a loan, you cannot just go to a shop and start selling your items. You also need to avoid going directly to a shop and start buying every available item on display. We gather a few things that will help you prepare on your first transaction in a pawn shop: Decide what you want to do Before you even consider any shop, decide first what you really want to do. Are you planning to buy, sell or just pawn your items? If you only plan to pawn your items, decide on the duration. When do you think will you be able to claim the item or pay off your loan? What items are you planning to buy, pawn or sell? Do your Research The next step that you have to do is conduct a research. Once you have made up your mind on what you would like to do then start looking for pawnshops near your area. You have to know that not all pawnshops accept the same type of collaterals, although almost all of them accept jewelries made of gold and silver. Some shops that will accept your house and lot, your car and other valuable items as a collateral. You have to make sure that the item you will be selling or pawning will be accepted in your prospect shop. If you are trying to buy then check if the items you are looking for are available. Know the Value of item and Learn to Haggle As a rule of thumb, a business will try to maximize its profit but it does not mean that they should offer you much less than what your item is worth. You will not really know if the price you are getting is too high or too low if you do not know its actual value. The best way to know the value of your item is to check its current market price. This will give you a rough estimate as to the specific amount you should be getting from it in case you decide to pawn it. Present your Items in its Best Quality When you are selling or pawning an item, make sure that it comes in great shape and quality. It will be best to clean or polish them before bringing them to a shop. If you have them in their best possible quality then you have a higher chance of getting a higher rate compared to bringing them there uncleaned and unpolished. If you have to place them in a special jewelry box, then do so, especially if it means that it will increase its value. Have all the Necessary Documents or Certification Documentation may include valid identification card. Most pawnshops will require you to present valid identification card for security purposes. This will help them verify your details, and make sure that what you are selling or pawning them are not stolen items. This will also protect you as their client because by the time you have to claim your items back, you can easily present a valid ID or the receipt of your transaction. Some items also require a certification or proof of ownership before the shop accepts it. Understand the Terms and Conditions Lastly, before signing anything and handing over your items, you must have sound understanding of what you are getting yourself into. Check the terms if they are agreeable to you. How do you find the interest rate? How long can you have it pawned before the pawn shop claims it as its property? What are consequences of not being able to pay the interest on time? Take the time to read the small prints on the document that you will be given before signing them. You have to understand these things; otherwise, you may regret the consequences of a rushed decision-making. It is important to do your research to understand what you will be getting into. These tips are particularly handy for people who will be dealing with a pawn shop for the first time. It is not just about taking your valuable items to the shop and walking away with some cash on your pocket. These are valuable items that you will be handing over to people you do not know.   Being a first time customer should not be that hard if you only know the things that you have to do. You just have to follow the above mentioned tips, and expect to have a smooth-sailing and successful first pawn shop transaction. Loan Loan, Pawn, Pawn Shop, Pawnshops Characteristics of a Great SEO Firm Admin September 22, 2016 Most companies are now starting to build a strong online presence, and they are realizing that online marketing is a major driving force of their business. However, not all company owners, COOs,and executives are adept at online marketing.   If your company is constantly striving to create a solid online presence, then hiring an SEO firm might be the best solution for you. According to SEOExplode, \u201cIf you have a new site, an old site, a website that is currently not performing well or even a penalized site from a previous SEO company we would be more than happy to help!\u201d These days, just having a website is not enough.  That website also should be able to generate the foot traffic and the foot traffic should be able to convert to bottom-line figures. There are currently hundreds of SEO consulting firms in every big city in the world today.  Most SEO firms promise one thing: that they will promote your company website and guarantee that they get first page ranking on Google and other search engine sites.  However, all SEO firms seem to promise that.  There are a many misconceptions about what a good SEO company is, when in fact, the only thing that you should be looking out for is if they are able to fulfill your own company\u2019s objectives. How do you know what SEO firm to hire, and that they will be able to assist you in fulfilling your company\u2019s marketing and sales goals?What are the characteristics of good SEO firms? What should we look out for? There is evidence of their work. In hiring outside consultants or even employees, we often ask for evidence.  It could be their list of achievements, or their CV. A good SEO firm always leaves a trail of their good work behind. It doesn\u2019t even have to be tangible results such as high SEO rankings. Besides you may not see tangible results of SEO rankings for your company right away. The most important evidence that a good SEO company can show you is their actual SEO practices.  There are actually systems and processes on how to get to the ultimate goal of high SEO rankings, and what your company can do is to find out if the SEO Company is able to provide these deliverables during the first month. You should look for an SEO audit of your website, comprehensive analysis of your website\u2019s link profile, a plan of optimizing content on your site, and articles with links to other sites that will be published in the future or have already been published. If they are unable to provide you with these smaller deliverables, then there is a lack of good practices, and they won\u2019t be able to deliver the ultimate goal for your company. If they have nothing to show for, then it\u2019s either they really have no evidence of their work, or they are hiding something. They communicate with you constantly. An SEO company that does not contact you frequently may not be working as diligently on your site as you hope. Since it is your company\u2019s website, then it only makes sense that they ask you for several data such as: editorial or administrative access to your content management system, administrative access to Google analytics, and access to the webmaster tools of Google. The SEO Company should also ask for access to your social media pages because they would also work on how to optimize your social media content and boost views.  Another very important thing that they will require from you is a list of target keywords. If they don\u2019t ask for these types of information, then they may not be doing good SEO practices, and are just adding link backs on their huge network of sites with no content at all.  SEO companies will not be interested in you, and will not build a relationship with you.  They will not request for meetings so that they can update you with what they have done and they will not give recommendations on how to improve your online marketing strategies.  This is potentially harmful to your company. They lay out their methods and techniques. Good SEO companies are not afraid to lay out the techniques that they employ in order to serve their clients well.  In fact, you don\u2019t even need to ask for this information because they will gladly give it to you. Be very wary if the company representative tells you that their SEO practices are confidential and cannot be disclosed. Most SEO practices are well-known in the industry, and the measure of a good SEO company is how good they do these methods and techniques.  The methods should not be a secret because accepted and legitimate practices should be disclosed. If the SEO Company tells you, on the other hand, that their practices are too \u201ctechnical\u201d to explain, you should be wary of this firm as well.  Good SEO companies have ways and means to explain \u201ctechnical\u201d details and jargon and convert them to layman\u2019s terms. A measure of a good company is the fact that they are able to clearly explain their methods and techniques to a person who does not belong to the industry. These are just some of the characteristics that you should look out for in getting an SEO company.  The ultimate gauge is in six months, you will see your company\u2019s ranking rise, you have tangible improvements in your online presence, and you actually have positive numbers to show for it. SEO Characteristics of a Great SEO Firm, misconceptions about what a good SEO company Keeping Your Treatment Menu Simple Terry Garner July 9, 2016 As a customer, you may have experienced going to a restaurant, a shop, or any place in general that sells things and being faced with tons of choices for just one type of product. For instance, you go to a sandwich restaurant and you are given the option to make your own sandwich, and then you are given more than eight types of everything, from the bread to the toppings. This may seem like a great idea for some, especially for the owners who think that giving more options means giving the illusion to customers that they are being given more things to choose from. However, for the majority, it all just seems confusing, especially since a lot of customers do not even know the difference between one and the other. Does the average person really understand the difference between wheat and white bread? The same principle applies to beauty salon. Successful ones such as NYBeautyBarSalon.com have always maintained the simplicity of their menus, and all for a good reason. Customers would come in and ask for a facial, and they are given all of these different types of facial that they have not even heard of. In the end, they tell you \u201cLook, I just want a facial. If you can\u2019t give me that, I\u2019ll just go to somewhere else that can give me a facial.\u201d The problem is they do not know the difference between one over the other. It is just like asking a person which shade of red he likes best, when the shades you offer are basically just the same in their eyes. The point is, keep it all simple. To a lot of beauty salon owners, including those at NYBeautyBarSalon.com, providing more options to customers is what seems to be the best thing to do.   Take manicures and pedicures, for instance. Everyone knows how manicures and pedicures work \u2013 people get their hands soaked, their excess skin removed, their cuticles cured, and their nails done. Today, even the color and the type of paint to be used on the nails have more than ten options in many salons. Some offer gel nails and some offer acrylic. Will the average beauty salon goer even know the difference? If you yourself cannot decide which brand is best, how would the customer be able to make an equally difficult decision in choosing which type of treatment works for them? Keeping it all simple is the key to getting more customers visit you. It is not that you are limiting them to only a handful of options, but you are actually saving them time they would have otherwise spent deciding which type of the same service they want to be done. With successful salons like NYBeautyBarSalon.com following this trend, your salon should, too. So, with all things said about simplicity, how much choice should you offer to your customers? Most experts and entrepreneurs, including those from NYBeautyBarSalon.com who have been aware of the ins and outs of the industry, typically agree on providing at least three to four types of each service as the maximum \u2013 anything higher than these numbers will only cause confusion on the part of the customer. It also helps if you would offer helpful charts and menus to guide your customers. Especially with manicures, it is important that you provide a color menu. It all makes it easier for people to choose what they want done on their nails. As a salon owner, you must have a real passion for the job, including the industry itself, the work, and the clients that you work with. However, if you really want to become a success story, you should also think about how much you are earning, and how much earning potential you have with the services that you are ready to offer to your customers. Do not be afraid to scale down and offer fewer services. If it means providing more convenience to your customers, then there is absolutely no reason for you to worry. Beauty Beauty salon, Fashion, NYBeautyBarSalon, Salon All about Iron On Patches Gail Aiken March 10, 2016 Iron on patches show a new and interesting way of displaying one\u2019s personality or representing a certain brand, sports team or business organization. People attach these patches to jeans, shirts, skirts, trousers, backpacks, shoes and other related outfits for both mending and decorative purposes. Those who are interested in purchasing these patches can go to arts and craft stores to choose from various designs. Functions of Iron on Patches These patches are small pieces of fabric that people put on top of another layer of fabric. The purpose of this is to cover faded and torn parts of an outfit. Decorative type of patches may not need to cover something. Most people mainly use them for customizing their outfits. On mending garments, these types of patches are used to cover discolored, faded, torn or stained parts of an outfit. They are also useful in hiding holes and rips that are unpleasant to see when wearing garments. By using these patches, people can save a lot of money on purchasing new clothes. Older ones can still be used but with more decorative looks this time. The use of these patches is ideal for people who have favorite clothes that are already damaged yet they don\u2019t want to throw away simply because they believe that these are still usable after minor repairs. When it comes to decorative purposes, a lot of people use these types of patches to create a certain fashion statement when wearing tops and bottoms. Sometimes, they are not just used for decorative purposes. Anyone can also use these as commemorative patches to celebrate historical events or support certain social causes. Most soldiers, police officers and other professionals wear uniforms with iron on badges. How to Attach an Iron on Patch? Two essential things should be kept in mind when attaching an iron on badge to any garment. The first one is that the fabric where the patch should be placed must not melt after applying a specific amount of high heat. When purchasing garments, customers can look for a sticker or label indicating that a particular garment is iron-friendly. There should be an ideal amount of temperature to be applied on a particular type of fabric when attaching an iron patch. For wool fabric, it should be 300 degrees F; for cotton \u2013 400 degrees F and for linen \u2013 445 degrees F. Keep in mind that this process is not applicable on delicate fabrics like nylon, silk and leather. If people want to put patches on these fabrics, it\u2019s recommended to glue or sew them on the surface. How to Prepare a Fabric Before Attaching the Iron on Patches? Make sure that the garment is clean and free from dirt because if an iron on badge is pressed on a dirty fabric, the dirty particles will get trapped inside. It\u2019s also essential to wash the garment or fabric with sizing because it stiffens the surface of the fabric. After that, gently iron the garment\u2019s surfaces to remove all creases. Once done, the patch is now ready for pressing or ironing onto the fabric. What are the benefits of Iron On Patches?It\u2019s much faster and easier to attach these patches using a flat iron than manually sewing embroidered patches into the fabric. Also, sewing patches or badges can leave minute holes in the garment\u2019s underlying surface while the iron-on ones don\u2019t leave holes or other damages. They already become part of the garment\u2019s surface once pressed by heat. Plus, people can also attach other types of iron on badges or patches that are made of beads, metals or sequins to the surface of the garments and any other items such as caps, belts, bags and others. Product Belts Patch, Embroidered Patches, Fabric Patch, Iron Patch Getting Your Foot In The Door With Proper Web Design \u2013 Hiring A Solid Company Mary Wolfe October 15, 2015 There are a lot of different ways that you can set up a good website today. Some people will tell you that all you need to do is go with a free solution, and install a template. There are some good templates out there, and some of them are absolutely free. However, the reason you don\u2019t want to use them is because you\u2019re going to end up losing market share as a result. Remember, search engines today don\u2019t like duplicate elements which means your code can\u2019t be duplicate in some instances, your tags have to be different, and all sorts of content has to be placed firmly within your site. If you are working with templates, you\u2019re going to have to overcome the duplicate ratio that could be quite high overall. If you\u2019re going to get a foothold moving forward, you need good design skills, and not the templates. You\u2019ll want to search online for terms like, Long Island web design, and narrow down your field. The Reason You Need Web Design The simplest reason that you have to consider in regards to hiring a company to do design work for you is simple, you need to stand out online. You cannot stand out online as a business without having a good web design in place. Some people will argue the opposite, but that\u2019s not true. You cannot just update a page and see a huge jump in traffic or margins. It\u2019s a misguided thing to set up a site and not have any sort of design elements in place, even if they are simple. You are going to find that templates, no matter how grand they may seem, will not deliver the experience that the end user of today\u2019s internet world demands. It may be harsh, but it\u2019s true on all accounts, and should not be taken lightly. You will need help pushing forward in this regard, and something that should not be taken for granted on any level. Professional Solutions The reason why you should need to hire someone, and start your search online for Long Island web design, is because you need to look for professional grade options that are going to help you build on the right collateral. The right collateral in this case is professional grade. The pros that are working with web design aren\u2019t just building pretty sites, they are doing something more, creating experiences within interactive media design that will relay the positive message of your business to the right channels. There\u2019s a big separation here that you need to understand, and it\u2019s going to help you build on the right elements. Professional solutions are not going to just set up a site, they will help you with SEO as well. Search engine optimization is the key to getting your page out to the masses and linked to the best search engines and results. When someone looks for anything you\u2019re doing, even if it\u2019s just a keyword, they will land on your page and something grand will happen. Focusing on the right elements overall is key, because you will find that you can gain serious access to a lot of traffic if you just look at optimization and design as a whole. The Mobility Issue Only professional grade options are going to help you with the next evolution in internet access. Right now millions of people are not relying on their laptops or desktops to serve the internet. They are relying on the mobility that comes from their phones and tablets. In fact, more people are surfing this way than any other method, and that means that you are going to have to placate them and get their attention. Doing so means that your website can\u2019t be template, it has to be custom so that the browser serves the right version of your site overall. If you do not focus on this, and you instead focus on other mobility issues, you will end up with the wrong elements overall. It\u2019s important not to set yourself up for failure here. Look out for Long Island web design, and get your site mobile friendly as it will help you not only get the right audience, but it will pay off dividends in terms of SEO, guaranteed. Overall, you should not just rely on free methods to get your business site off the ground. Professional solutions will help you build on the right platforms and give you a leg up on competition, giving you a fierce option that others won\u2019t have in place. Every time you see a business using a template, you will be able to trump them with your site, and that will ensure that the end user sees that. If the end user sees that you have tried harder to build a better online solution, you will get their business whereas others will be seen as amateurs in their field. Take this option out for a try, and see why focusing on professional grade design is better. You may find that looking online for something along the lines of Long Island web design, can help you narrow down your search and get the right implementation of design and SEO services in place. You won\u2019t regret it, that\u2019s for sure. Web Design Good website, Long Island web design, Professional grade design, Search engines, SEO services What You Need to Know About Nylon Lanyards Robert Apodaca September 28, 2015 Nylon lanyards have a polished sheen and smooth finish. The texture of an imprinted nylon lanyard allows it to show a very clear print and an intricate design. The design is printed onto the lanyard through silkscreen printing. The finished customized nylon lanyard has a glossy finish. This type of customized lanyard is a favorite in big events, as giveaways and in trade shows because of its high quality. Customized nylon lanyard can be purchased online for as low as 3 dollars at a minimum of a hundred pieces. Shipping won\u2019t be an issue as most manufacturers offer it for free. What is Nylon and What\u2019s the Advantage of Using It? Nylon is a type of synthetic polymer which can be melted and molded into different shapes. It was first produced in1935 at DuPont\u2019s research facility by Wallace Carothers. Nylon fibers, molds and films can be used in car parts, flooring, electrical equipment, apparel, food packaging, and rubber support. It was first commercially used in 1938 as a bristle for toothbrushes. In 1940, it became a popular material for making women\u2019s stockings \u2013 that\u2019s merely a year after it was recognized as a fabric in 1939. Later on, nylon was also used to make fishing lines and guitar strings. Nylon was developed to replace silk due to the latter\u2019s scarcity during World War II. It was used as a material for making vehicle tires, flak vests and parachutes. It is also used in many car parts that are close to the engine because it is highly heat-resistant. It is also the reason why nylon is widely used as a material for making food packaging. What are the Possible Customizations and Attachments for Lanyards? There are a lot of choices when it comes to customizing lanyards. You can choose your desired color, fabric, design, print and attachments. Lanyard makers online offer a wide variety of choices. Prices may also vary depending on your choice of customization and add-ons. There are lots of lanyard colors to choose from. You only need to check a full color Pantone Solid Coated Guide Book to determine the exact reference number for your color preference. Customized lanyards can also be made according to your choice of fabric such as: polyester, woven, nylon, tubular, dye sub and cord. You may also choose from different imprint designs. The possible choices for lanyard attachments are Thumb Hook, No Swivel J Hook, Bulldog Clip, Thumb Trigger, Swivel J Hook, Key Ring, Oval Hook, Carabiner, Plastic J Hook, Cell Phone Loop or a combination of your choice. The price for having these add-ons usually ranges from $0.09 to $0.18, depending on the lanyard\u2019s size. What are Badge Reels? A badge reel is an alternative connector for identification cards and badge holders. It usually comes in a round or square shape. It has a clip at the back that you can attach onto a belt or uniform. There are also various types of clips that are attached at the back of a badge reel, such as belt clips, spring clips, and close-end clips. Just like an ordinary lanyard, it can also be customized according to your choice of material, color or design. It can also be printed with the name and logo of the company or entity. Most lanyard manufacturers on the web offer a wide selection of badge reels that are fully customizable. The price of customized badge reels range from as little as 50 cents to roughly 3 dollars; differences in cost are also influenced by the design. All in all, if you\u2019re looking to invest in any of these accessories, it\u2019s guaranteed that you won\u2019t have problems when it comes to affordability and customizability. Product Badge holders, Breakaway lanyards, Custom Lanyards, ID Lanyards, Lanyards Famous Celebrities Who Got Cremated George Louis September 7, 2015 Celebrities may have been stars who were given the chance to shine their brightest; they\u2019re only human, and so, eventually their lights also fade in time. Some of these celebrities who passed on chose not to be buried, but instead, cremated. Are their cremations a decision that was made when they were still alive? Were there any special reasons for this personal decision? Find out who these celebrities are and learn more about them. Amy Winehouse Amy Winehouse, a famous singer and a songwriter, was cremated on July 26. The singer\u2019s cremation was somehow controversial because she was Jewish, and Jewish laws do not allow this kind of burial ceremony. According to Jewish laws, God made human beings in His likeness, and so human bodies are sacred and priceless. For them, the dead mustn\u2019t be destroyed and must be treated with dignity. Amy\u2019s cremation however still went through in Golders Green Crematorium. A private funeral service was held at Edgewarebury Cemetery. Her father gave a eulogy saying, \u201cGoodnight, my angel, sleep tight.\u201d Albert Einstein (1879 \u2013 1955) Albert Einstein wanted to be cremated. This desire was fulfilled after he passed away in Princeton Hospital in 1955. However, not all of him was cremated \u2013 his brain wasn\u2019t, because of Thomas Harvey. Thomas Harvey was the hospital\u2019s pathologist who took Einstein\u2019s brain without his family\u2019s permission. He believed studying Einstein\u2019s renowned brain would explain the reason behind Einstein\u2019s intelligence. What he did got him fired, and in 1998, the brain was returned and brought to Princeton Hospital. John Lennon (1940 \u2013 1980) On the night of December 8, 1980, John Lennon was shot multiple times at the back by Mark David Chapman. It was even a sad realization that earlier that day, Chapman and Lennon were even photographed together while the latter was giving the former an autograph. John Lennon was brought to Roosevelt Hospital; on 11:07 PM, he was declared dead on arrival because of the damage brought by the gunshots. On December 9, Yoko Ono (Lennon\u2019s wife) asked everyone for a few minutes of silence to pray for him, and informed everyone that there wouldn\u2019t be any funeral for Lennon. On December 10, Lennon was cremated at New York\u2019s Ferncliff Cemetery, and his ashes were scattered on Central Park. Heath Ledger (1979 \u2013 2008) Famous Hollywood actor Heath Ledger passed away on January 22, 2008 due to accidental overdose. His housekeeper and masseuse first found him unconscious around 2:45 PM and tried to revive him but to no avail. Around 3:30 PM, medical professionals arrived at the scene; he was declared dead a few minutes later. Ledger had two funeral services, one in Los Angeles and one in Perth, Western Australia. On February 9, Ledger\u2019s body was cremated in Fremantle Cemetery, and his ashes were placed next to his grandparents at Karrakatta Cemetery. Sir Alfred Hitchcock (1899 \u2013 1980) On April 29, film director and producer Alfred Hitchcock died in his sleep inside his home in Bel Air, California. His funeral Mass was held in Beverly Hills, specifically in Good Shepherd Catholic Church. He would have wanted a tombstone with the words \u201cThis is what we do to bad little boys,\u201d however this wasn\u2019t possible since his ashes were cremated and strewn on the Pacific Ocean. In the past, you don\u2019t think of cremation when someone dies. Cremation is viewed as impersonal and disrespectful. After all, you not only burn the body but also crush the bones. Nowadays, cremation is no longer as controversial as before, hence, more and more people choose to be cremated, and those people include celebrities. Everyone can just pay their last respects for the repose of their loved ones. Society Cremation, Funeral, Funeral Homes, Funeral services THE EVOLUTION OF CHALLENGE COINS Roberta Hughes August 24, 2015 The use of military challenge coins started in 1940s. Military officers use local currency coins for coin challenge activities. Going further back in history, the Romans rewarded their soldiers with gold coins for winning battles. The first known unit that used Special Forces Coins was the 10th Special Forces Group headed by Col. Vernon E. Greene. The Lodge Act allowed men of any nationality to join military service and this often caused communication barriers. Commander Greene found a way to avoid non-bona fides members from his troop. He produced coins to challenge soldiers to prove their identities and affiliation to the team. The challenge coins have a Trojan horse design on the front. They were originally used in a fundraising drive to purchase a German Wood-Carved Special Forces Trooper. In 1960s, someone from the 11th Special Forces Group initiated the over-stamping of old coins with a special emblem and presented them to every member of the unit. The gesture has warmed the spirits of the team and made their bonds stronger. One former commander of 10th Special Forces Group was inspired by the idea of personalized coining or minting. He produced coins for his men, turning the 10th Special Forces Group into the only unit in the Army that owned challenge coins \u2013 up until the middle of 1980s. Afterwards, the popularity of having specially-designed challenge coins for each unit of the Armed Forces spread like wildfire. Everyone started minting coins for their units. Commanding officers and sergeant majors started the tradition of presenting coins to their men who showed great courage and heroism while doing their duties. Members of military service took pride in keeping these coins inside their wallets together with their IDs and licenses. They became part of identification protocols, giving instant access to important military events. They became a silent morale booster, reminding both active and retired military men of the significant roles they\u2019ve served for the nation. One of the first producers of these coins was Don Philips of 20th Special Forces Group. He was a former commander who designed coins for his own unit during his retirement celebration. Other military officials became interested to do the same for their troops so they commissioned Philips to make coins for them. The commercialization of challenge coins minting began. Over the decades, the designs evolved from simple to complex. One of the earliest known coins was made of brass with faded emblem and text. The modern coins are done using machines that can produce perfect designs and display 3D effects. Everything became easy with the advent of computers and digitally-operated machineries. Customizing coins for any military service group, organization, and association became easier because they can choose from a variety of themes available from different coin manufacturers. The last decade has given coin manufacturers access to tools which makes numbering, photographic inserts, and special edgings elements possible. Virtually, everything that clients need to make their coins special and unique became available. Modern technology and innovations are making the manufacturing of these prized coins more popular to the general public. The customary tradition of welcoming dignitaries becomes more special by presenting coins to them to show respect and gratitude. US Presidents George Bush, Bill Clinton and Barack Obama have state coins for visiting diplomats and foreign visitors. They are also given to military men who fought valiantly in different battles to protect the freedom of America. Other countries like United Kingdom, Canada and Australia are doing the same. The proliferation of coins in the market added another tradition in the modern times \u2013 the passion of collecting historical coins. It gave rise to novelty shops as well as online stores offering different kinds of customized coins. They become products which are actively traded by civilians who love to own mementos of heroism and courage. Challenge Coins 4 Less is one of the best source of top quality products and great pricing for great custom coins and challenge coins of all kinds. Military Challenge coins, Currency coins, Custom challenge coins, Custom coins, Military coins 3 Reasons Why You Should Use a Portable Storage Container in Moving Eric Steele July 25, 2015 More often than not, moving can be undeniably stressful and inconvenient to families. Think about all the renting cost of moving trucks, the problem of loading your large furniture in the insufficient truck space, as well as the stress associated to thinking about the possible damages that transporting may cause to your belongings. This is the reason why more and more movers, who prefer practicality, are starting to choose portable containers as better alternatives to moving trucks when it comes to transporting their precious belongings from one place to another. To convince you further, here are 3 reasons why you should opt to use a portable container in moving: It is More Convenient. Using a portable storage container is indeed more hassle-free than renting a usual moving truck because first off, it is more spacious and sturdy than vehicles. This allows movers to load more items inside the portable cubicle than they normally would in a common moving truck. After safely loading all their belongings in the portable storage container, they only need to attach it to the rear end of their vehicle and that\u2019s it. No need to hire a moving team or truck because they can already do it by themselves if they want to, and on the plus side, dragging their family members along with them to do the job is also a great idea for a quality bonding time. It Provides More Security for your Belongings. When it comes to security, portable containers won\u2019t let you down. These movable cubicles are designed to be resistant from extreme weather and climate, as well as theft. They are guaranteed to be 100% watertight and are also made of high quality, solid, metal exterior that will ensure protection from any outside forces. In addition to that, they are also equipped with high level security locks to further keep all your worries away. And as mentioned earlier, aside from the safety ensured by the security locks, another good thing about a portable storage container is that families can do all the moving by themselves if they would prefer that. This is especially important if they are worried about working with a careless and negligent truck driver who won\u2019t really give a damn about the belongings on the truck most of the time. With a movable container that families can transport on their own, they will be able to spare their belongings from being damaged by the unavoidable carelessness of some moving truck drivers. It can Provide Temporary Storage. It is undeniable that moving a tiring task especially if you are going to move from one county to another. You will most likely feel extremely exhausted from the long travel already the moment you arrive at your new house, and the last thing you will want to do is unload all your belongings and put them all inside the new house. You would already be too tired to do all that, but there\u2019s no need to fret because here\u2019s another advantage of having a portable cubicle instead of a moving truck. It\u2019s a good thing that you can just leave your belongings inside the portable storage container in case you\u2019re not yet ready to unload and arrange your things. These storage containers are both water and wind resistant, so you don\u2019t have to worry that your stuff will get wet when it suddenly rains. With portable containers, you no longer have to get pressured by the limited time that moving trucks and teams provide. Because hiring a portable storage container can definitely do the job better and with all these things said, you have a guarantee that you will deal with less stress and inconvenience when moving. Author Bio: Portable Storage container is cost effective and can be an optimal storage solution for both commercial and residential purposes. Logistics Logistics, movable container, portable containers, portable storage container, storage container, transportion Callaway Golf Hits It Big with Hex Black Tour and Hex Chrome+ Balls Mary Tucker July 23, 2015 The Callaway Golf Company is very famous for their high performance golf clubs. However, aside from golf clubs, they also sell other golf related merchandise such as head gears and golf balls. Like their golf clubs, their golf balls are of high quality and are able to produce relatively excellent results. The Hex Black Tour and Hex Chrome+ balls are only two of the countless golf balls they have in their production. Introduction The HEX Black Tour golf ball is composed of five layers and equipped with two cores. This allows the golf ball to travel a great deal of distance with just the preferable level of spin while retaining accuracy. This golf ball\u2019s inner core has a significantly low compression coefficient, which allows users to produce a low spin even when using long golf clubs. The golf ball\u2019s outer core has a high compression coefficient, which gives users the ability to produce a greater spin when using shorter clubs. As its name suggests, its cover is designed with the Callaway Golf Company\u2019s patented HEX dimple pattern which is aerodynamically proven to reduce drag. On the other hand, the HEX Chrome+ has 4 layers and only one core. The golf ball\u2019s inner mantle and core are specifically developed to produce greater speed and distance. Its outer mantle is designed to significantly reduce the amount of spin it produces. The HEX Chrome+ cover is composed of thermoplastic urethane and is covered with the same dimple pattern as the HEX Black Tour. When used with a driver or fairy woods, both the HEX Black Tour and HEX Chrome+ were able to travel long distances, however the former had a slightly longer reach. Both HEX golf balls had excellent trajectory control. When used with wedges and short irons, the two balls had significantly different performance. The Callaway Golf Company\u2019s HEX Chrome+ golf ball has a tendency to spin back upon landing. The HEX Black Tour on the other hand tends to stay at the spot where it landed. The two golf balls both had the same performance when used with mid and long irons. Both the HEX Black Tour and HEX Chrome+ produced an average but stable trajectory. Wind was not an issue for them. Both of the balls have a conventional golf ball look. The HEX Black Tour\u2019s numbers are in black. The HEX Chrome+ on the other hand has red numbers and is available in the \u201cOptical Yellow\u201d color. Like all golf balls produced by the Callaway Golf Company, the HEX Black Tour and HEX Chrome+ have that signature hexagonal pattern. HEX Black Tour also has a more compact feel to it when compared to the HEX Chrome+. The HEX Black Tour Golf balls are great for golfers who prefer less spin and relatively soft conditions. The HEX Chrome+ on the other hand is perfect for players who prefer greater spins and rough conditions. In terms of price the HEX Black Tour is $8 more expensive than the HEX Chrome+. Golfers who value quality would most likely disregard the prices when choosing golf balls. Price conscious golfers on the other hand would most likely pick the HEX Chrome+. Advantages Both golf balls produce excellent trajectory and have the ability to penetrate windy conditions. The HEX Black Tour has a relatively longer reach and produces lower spin compared to most golf balls in the market. The HEX Chrome+ has a long reach and produces a higher spin. Disadvantages Both golf balls have some issues concerning durability. The HEX Chrome+ has a tendency to spin back, while the HEX Black Tour makes a distinct sound when hit which some golfers find quite annoying. Author Bio: Getting harder to hold onto your clubs? Sounds like it's time for some new golf grips! Score discount golf grips from name-brands like Winn, Golf Pride, Iomic, and more only at the Cave! Sports Callaway Golf, Conventional Golf Ball, Golf Clubs, Golf Grips THE IMPORTANCE OF PRINTED CIRCUIT BOARDS Malcolm Wagner July 23, 2015 Printed Circuit Boards (PCB) are thin plates which are usually made of fiberglass, laminated materials, or composite epoxy used as physical base to support chips and electronic components. These boards are printed or etched with conductive pathways to form circuits that will power electronic devices or gadgets. They support different electronic components like integrated circuits, resistors, and transistors, which are interconnected in the copper tracks. These components are put by drilling holes in the board and soldering them into the circuit pattern. Printed circuit boards are the motherboards of any electronic device from simple beepers, phones to computer systems, radars, and state of the art communication technology. They are self-contained modules that accommodate elements to form electrical circuit in order to activate electronic devices. Most televisions, cellular phones, radios, tablets and digital cameras have one or more PCB\u2019s. Desktop computers and laptops have bigger printed circuit boards which serve as platforms of internal components such as video cards, network interface cards, expansion cards, and controller cards \u2013 all these are connected to another PCB, the motherboard. Here are some of the reasons why PCBs are essential to electronics and technology industries: 1.They give mechanical support to electronic components. 2.They connect different components to others essential materials. 3.They give input/output connections that make devices functional. 4.They provide electrical impedance matching or the practice of designing opposition of the signal source to minimize or maximize the transfer of power. 5.They serve as conductors of heat transfer. 6.They provide electromagnetic shielding to guard the electronic components and cables against emissions of electromagnetic frequencies (EMF). The PCBs are the main partners of any electronic design. They are the unsung heroes of devices, equipment, and modern gadgets that mankind use for different purposes. These small power-packed components are the fundamental elements that help every industry function with convenience and ease. From automotive, transportation, defense, aeronautics, technology, medical, industrial and office tasks, PCB plays a great role. They connect computers to LCD monitors, hard disk and disk drives. They help write or read DVD and CD-ROM drives. The popularity of small but powerful smartphones, however, poses a big challenge to PCB manufacturers. The need to squeeze more processing capacity, functionality and memory to smaller circuit board brings pressure to manufacturers of this essential plate. The designs become multi-layered and ready to deliver more than 20 voltage rails to optimize the interactive circuit. This miniaturization of layouts that lead to higher densities is vital to electronics and telecommunication business. This growing trend makes printed circuit boards the most in-demand part of any electrical or electronic device. In 2012, PCB market was valued at around $ 600M. Different international manufacturing companies like Samsung, Sony and Panasonic became more aggressive in supplying their consumer market with the latest products. Europe, Japan and America remain the top contenders in mobile and electronic equipment. Modern PCB designs tools assist manufacturers of PCB to produce such components quickly, easily and cost-effectively. These gave rise to a three-part methodology in order to create quality boards. These three steps are schematic capture, simulation, and final layout. Schematic capture is creating design, picking the essential components, and placing them to the scheme. The electrical interconnection is then checked to ensure the board\u2019s capacity. Simulation tools manipulate the model scheme to check the magnetics, signal integrity, and physics. Final layout is the final phase and with the use of internet, the board design can be changed according to real-world specifications that make data accessible anytime and anywhere. This ensures that evaluation and re-evaluation can be done easily before the actual manufacturing process. Electronics Circuit boards, Pc design, Pcb, Pcb assembly, Pcb fabrication, Printed circuit board, Printed circuit boards, Printed circuits Types of Lanyard Lynn Moody July 18, 2015 Lanyards are primarily used as cords placed around the neck to carry small objects such as logo lanyards,custom lanyards etc. They vary according to material, style and function. Although they\u2019re now used as a fashion accessory, lanyards still shine in functionality. The most familiar type of lanyard is the badge. The badge lanyard is used to display ID cards or tickets and is commonly used in schools, companies, hospitals, or events. The fabrics used are varied but the badge arrangement is typical. The fabric is attached to a clip and this clip holds a plastic pocket that\u2019s usually clear on one side to display the person\u2019s identification. Badge lanyards are also effective promotional materials, which is why many companies invest in them. Key chains can also be attached to the badge lanyard to avoid losing them. For a trendy approach, beaded lanyards are available. Functions can vary but for a stylish impact, lanyards are adorned with precious stones and gems. Swarovski crystals are all the rage among enthusiasts. These are widely used as cell phone accessories, eyeglasses carrier, and key holders. The most significant type of lanyard is probably the safety strap lanyard. Sometimes, it is referred as the lineman lanyard or breakaway lanyard. Its first and foremost purpose is to guarantee the wearer\u2019s safety. Law enforcement officers mostly use the safety strap to keep service firearms within reach. It is especially useful during missions and any event that requires constant movement. Breakaways are the most appropriate lanyards for people working around heavy machineries and equipment. With the looming risk of getting caught in any part of the bulky equipment, lanyards lets them move freely and the breakaway feature keeps them from choking or being stuck in dangerous situations. This flexible feature is designed to break or snap apart upon application of pressure. Athletes, like mountain climbers, recommend the use of breakaways as it helps in preventing the risk of falling. The heavy duty straps attached to their bodies are adjustable and will support them by hooking steadily on a fixed object. It is also the choice lanyard for camping or jogging. Lanyards come with a variety of hardware that can be attached to the material. The leading hardware favorites are the split rings, J-hooks, and bulldog clips. Split rings are normally used with the keychain lanyards but can hold ID cards and other small objects. J-hooks and bulldog clips can be used independently or attached to a split ring. They are used as badge holders or ID holders. The preferred hardware for safety straps are the breakaway connector, quick-release buckle, and slide side adjuster. The breakaway connector is the perfect safety strap partner as it has a snapping feature. It can be used for heavy work and vigorous play. The release system is designed to pull apart when enough pressure is applied and when the lanyard is jammed. Quick-release buckles let the wearer remove the attached object without removing the lanyard around the neck. The slide side adjuster can shorten or lengthen the lanyard fabric. This can be done by simply moving the installed adjuster which is usually placed at the back of the neck. Other popular lanyard accessories include the water bottle holder and the cell phone holder. They can both hang around the neck or sling to the side. Both were made for convenience and security. It\u2019s evident in how they\u2019re often used \u2013 to provide easy access to a refreshing drink, and to use a phone without detaching it from the strap. Much like the quick-release buckle, you can remove the security strap of the cell phone without taking the lanyard off your neck. Overall, even though lanyards differ in terms of their special characteristics, their main strengths are the same across all types. Product Badge Lanyards, breakaway connector, Custom Lanyards, ID Lanyards, Lanyards, Logo Lanyards, Neck Lanyards, water bottle holder Habits of Aspiring Motivational Speakers on Parenting Rita Yates July 17, 2015 Are you among the few aspiring motivational speakers on parenting? Fret no more, as you are on the right page. One of the most effective ways to become an effective motivational speaker on parenting is to become a good parent. Remember, the best motivational speakers share their own experiences regarding a specific subject matter. Parenting Habit #1: Give unconditional love to your children. Showing your children that you love them unconditionally will surely make them feel a sense of belongingness in your family. Your children need to feel that they will always have a place in your family, no matter what their mistakes and flaws are. According to studies, children who belong to affectionate families are better equipped to handle disappointments and cope with frustrations in everyday life. They have the capability to develop self-esteem, self-worth, self-belief, and self-confidence. Parenting Habit #2: Learn to affectionately touch your children. Whether your child is already a teenager or a toddler, they need your touch. It is crucial that you show love to your children by giving them a pat on the back. Hugging them is also a good option. Try to observe and assess the preferences of your child. Your child\u2019s primary language of love is through physical contact if he or she loves to link arms with you, always hugs you, holds your hands, or touches you. Gentle touches help release feel-good hormones. It makes your child\u2019s immune system perform better and also reduces stress levels. Parenting Habit #3: Be ready to help. Always being there ready to serve your child is among the most powerful languages of love. One way of doing that is taking time to repair the toys of your children. You can tell if your child tends to focus on this love language if he or she likes to prepare something for you, such pouring you a cup tea or setting up the table for dinner. Parenting Habit #4: Give simple gifts. This language of love isn\u2019t synonymous with being materialistic or selfish. The size or amount of the item is not a huge factor. The most important thing is the thought of giving. Children who show and express their love through painting your face, giving their works of art to you, picking flowers, or cutting colored papers for you prefer to receive and show love through gift-giving. Reciprocate your child\u2019s love by giving a simple item, such as a wonderful shell you found along the beach or an interesting rock that can be added to her or his collections. Parenting Habit #5: Spend quality time with your children. Everyone would love to spend time with their loved ones. Who would not enjoy a fun game or a chat with the most important people in the world? Still, spending time is among the most challenging parenting habits (even more so if you\u2019re trying to join the ranks of the best motivational speakers). One of the consequences of living a fast-paced life is failing to connect with your loved ones. Kissing and hugging is much quicker and easier to give your children, compared to sitting down and telling stories. Learning more about your children (while showing genuine enthusiasm) is one of the best things you can do, especially if your child prefers to be loved in a communicative manner. Always make sure that you devote time to your child. Focus your attention on him or her when talking or doing some activities together. Once you\u2019ve finally established your positive parenting habits (that shouldn\u2019t take too long since you probably have a good foundation already), rest assured that you will become one of the most effective motivational speakers on parenting today. Motivation Effective Motivational Speaker, Good Speaker, Motivational Speakers, Quality Speaker, Speakers Things to Look for When Buying a Long Island Home Daniel Joshua July 16, 2015 Long Island, which is located in New York State\u2019s southeast, stretches to the Atlantic Ocean and has four counties. Of these counties, two (Suffolk and Nassau) are characteristically suburban while the other two (Brooklyn and Queens) are New York City boroughs. However, \u2018Long Island\u2019 is used more to denote Suffolk and Nassau counties to differentiate those areas from the city. In Long Island, you will find some of the world\u2019s most majestic Long Island real estate properties where you can spend the summers in or live in permanently. The Neighborhoods It is not a secret that Long Island hosts some of the country\u2019s most expensive real estate properties as the island is best known for its high quality of life and affluence. Suffolk and Nassau counties are among the country\u2019s 25 richest counties. Moreover, Nassau is the 30th wealthiest county in the nation while Suffolk has developed North Fork\u2019s potato fields into a thriving wine-producing region. South Fork is best known for its beach towns like the famed Hamptons. Within South Fork is Montauk Point, which is home to the Montauk Point Lighthouse. Nassau County is an outpost of rural affluence especially in the North Shore\u2019s Gold Coast. Shore communities are established along white sand beaches (that front the Outer Barrier Islands and the Atlantic Ocean) and protected wetlands. During the gilded age, wealthy Europeans and Americans built lavish homes on Nassau County\u2019s North Shore. There are many of these homes that are still in their original state while others have long since been demolished. Other of these former homes has been converted to museums, universities, arboretums, and parks. Tips for Buyers While many would think that most Long Island real estate properties are expensive, there are also other properties that can be within one\u2019s reach. There are many properties that are as affordable as $300,000 while there are also other properties (especially the beachfront ones) that are listed as high as $4 million. There are also rental properties that can be enjoyed throughout the summer. If you are buying a home in Long Island, the more you know, the entire home buying process would be less scary. Here are some tips you should know when purchasing a house. Appreciation While the Long Island real estate movement is cyclical (sometimes down and sometimes up), real estate has appreciated constantly throughout the years. The OFHEO (Office of Federal Housing Enterprise Oversight) records nationwide the single family house values\u2019 movements. A lot of people see their homes as hedges against inflation. Ownership Pride The pride of ownership is one of the main reasons why people seek to have their own homes. This means you can do anything you want with your home like decorating it, add permanent fixtures, turn up your CD player\u2019s volume, or paint the walls in any color you wish. Having a home gives your family a sense of security and stability. Having your own home is an investment for the future. Get Pre-Approved Before Looking for a House Getting pre-approval saves you the grief of looking at homes that you cannot attain and getting pre-approved allows you to place a serious offer when you find your desired property. Pre-approval from a lender is based on debt, credit history, and actual income. Deductions in Mortgage Interest Owning a home is considered a tax shelter and the country\u2019s tax rates are favorable to home owners. Mortgage interest is deductible fully on the tax return as long as the balance of the mortgage is smaller than the home\u2019s price. Interest is the mortgage payment\u2019s largest component. Preferential Tax Treatment Capital assets get preferential tax treatment. If you get more profit than the allowable exclusion as you sell your home, the profit will be deemed a capital asset as long as the home is owned for more than a year. Equity Loans Consumers who have credit card balances are not able to deduct the interest paid that can cost from up to 18 to 22 percent. On the other hand, equity loan interest is deductible and costs less. For home owners, it is better to pay such debt with a home equity loan. There are many consumers that can borrow against their equity for various reasons like college, home improvement, starting a new venture, or medical purposes. However, there are certain states that inhibit home equity loans. Getting a Home that will Likely Appreciate With steady and slow home appreciation, there are a lot of real estate investors who became wealthy that way. They did it by analyzing carefully their investments\u2019 appreciation potential and they invested in the long term. Even if you want to live in your house for only a short period of time, you would want your home to appreciate in value when you sell it. Getting the Right Real Estate Agent Now that you have known some of the things that you need to buy your Long Island real estate property, it is now time for you to call us to get started on acquiring your own home. While you many know the basics, and you know what you want, you still need us to work on those fine details like documentation and sealing the deal. Contact us. The next thing you know, you are living in the house of your dreams and enjoying the Long Island views. Real Estate Investment, Long Island real estate, property, Real estate agent Recent Posts How the Pawn Shop Business Works Helpful Tips Before Going to a Pawn Shop Characteristics of a Great SEO Firm Keeping Your Treatment Menu Simple All about Iron On Patches Archives October 2016 September 2016 July 2016 March 2016 October 2015 September 2015 August 2015 July 2015 Categories Beauty Electronics Loan Logistics Military Motivation Product Real Estate SEO Society Sports Web Design Best HCG drops Article writer Rubber bracelets SEO consultants helps to guide cutting edge SEO & Internet marketing techniques.",
		  "img_src": [
		    "http://hardhero.com/wp-content/uploads/2015/10/care2.jpg",
		    "http://hardhero.com/wp-content/uploads/2016/10/Pawn-Shops-300x147.jpg",
		    "http://hardhero.com/wp-content/uploads/2016/10/Pawn-Shop.jpg",
		    "http://hardhero.com/wp-content/uploads/2016/10/Pawn-300x168.jpg",
		    "http://hardhero.com/wp-content/uploads/2016/10/Pawn-Shop1.jpg",
		    "http://hardhero.com/wp-content/uploads/2016/09/Characteristics-of-a-Great-SEO-Firm-300x153.jpg",
		    "http://hardhero.com/wp-content/uploads/2016/09/SEO-company-Communication-300x300.jpg",
		    "http://hardhero.com/wp-content/uploads/2016/07/salon-300x166.jpg",
		    "http://hardhero.com/wp-content/uploads/2016/03/patches-300x300.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/10/seo-300x200.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/09/Lanyards.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/09/Cremation.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/08/customcoins-300x142.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/07/Portable-Storage-container.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/07/Golf-grips.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/07/printedcircuitboards.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/07/lanyard-300x162.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/07/Keynote-Speaker-300x169.jpg",
		    "http://hardhero.com/wp-content/uploads/2015/07/real-estate.jpg"
		  ],
		  "title": "www.hardhero.com",
		  "meta_description": "hardhero.com blog that provides interesting articles on general topics and ideas.",
		  "favicon": "Not Found",
		  "alt": [
		    "care",
		    "Pawn Shops",
		    "Pawn Shop",
		    "Pawn  ",
		    "Pawn Shop",
		    "Characteristics of a Great SEO Firm",
		    "seo-company-communication",
		    "salon",
		    "patches",
		    "seo",
		    "Lanyards",
		    "Cremation",
		    "customcoins",
		    "Portable-Storage-container",
		    "Golf grips",
		    "printedcircuitboards",
		    "lanyard",
		    "Keynote Speaker",
		    "real estate"
		  ],
		  "inlinks": [
		    "http://hardhero.com/",
		    "http://hardhero.com/",
		    "http://hardhero.com/contact-us/",
		    "http://hardhero.com/legal-terms/",
		    "http://hardhero.com/subscribe/",
		    "http://hardhero.com/how-the-pawn-shop-business-works/",
		    "http://hardhero.com/author/logan-dylan/",
		    "http://hardhero.com/how-the-pawn-shop-business-works/",
		    "http://hardhero.com/category/loan/",
		    "http://hardhero.com/tag/loan/",
		    "http://hardhero.com/tag/pawn/",
		    "http://hardhero.com/tag/pawn-shop/",
		    "http://hardhero.com/tag/pawnbrokers/",
		    "http://hardhero.com/tag/pawnshops/",
		    "http://hardhero.com/helpful-tips-before-going-to-a-pawn-shop/",
		    "http://hardhero.com/author/zachary-king/",
		    "http://hardhero.com/helpful-tips-before-going-to-a-pawn-shop/",
		    "http://hardhero.com/category/loan/",
		    "http://hardhero.com/tag/loan/",
		    "http://hardhero.com/tag/pawn/",
		    "http://hardhero.com/tag/pawn-shop/",
		    "http://hardhero.com/tag/pawnshops/",
		    "http://hardhero.com/characteristics-of-a-great-seo-firm/",
		    "http://hardhero.com/author/admin/",
		    "http://hardhero.com/characteristics-of-a-great-seo-firm/",
		    "http://hardhero.com/category/seo/",
		    "http://hardhero.com/tag/characteristics-of-a-great-seo-firm/",
		    "http://hardhero.com/tag/misconceptions-about-what-a-good-seo-company/",
		    "http://hardhero.com/keeping-your-treatment-menu-simple/",
		    "http://hardhero.com/author/terry-garner/",
		    "http://hardhero.com/keeping-your-treatment-menu-simple/",
		    "http://hardhero.com/category/beauty/",
		    "http://hardhero.com/tag/beauty-salon/",
		    "http://hardhero.com/tag/fashion/",
		    "http://hardhero.com/tag/nybeautybarsalon/",
		    "http://hardhero.com/tag/salon/",
		    "http://hardhero.com/all-about-iron-on-patches/",
		    "http://hardhero.com/author/gail-aiken/",
		    "http://hardhero.com/all-about-iron-on-patches/",
		    "http://hardhero.com/category/product/",
		    "http://hardhero.com/tag/belts-patch/",
		    "http://hardhero.com/tag/embroidered-patches/",
		    "http://hardhero.com/tag/fabric-patch/",
		    "http://hardhero.com/tag/iron-patch/",
		    "http://hardhero.com/getting-your-foot-in-the-door-with-proper-web-design-hiring-a-solid-company/",
		    "http://hardhero.com/author/mary-wolfe/",
		    "http://hardhero.com/getting-your-foot-in-the-door-with-proper-web-design-hiring-a-solid-company/",
		    "http://hardhero.com/category/web-design/",
		    "http://hardhero.com/tag/good-website/",
		    "http://hardhero.com/tag/long-island-web-design/",
		    "http://hardhero.com/tag/professional-grade-design/",
		    "http://hardhero.com/tag/search-engines/",
		    "http://hardhero.com/tag/seo-services/",
		    "http://hardhero.com/what-you-need-to-know-about-nylon-lanyards/",
		    "http://hardhero.com/author/robert-apodaca/",
		    "http://hardhero.com/what-you-need-to-know-about-nylon-lanyards/",
		    "http://hardhero.com/category/product/",
		    "http://hardhero.com/tag/badge-holders/",
		    "http://hardhero.com/tag/breakaway-lanyards/",
		    "http://hardhero.com/tag/custom-lanyards/",
		    "http://hardhero.com/tag/id-lanyards/",
		    "http://hardhero.com/tag/lanyards/",
		    "http://hardhero.com/famous-celebrities-who-got-cremated/",
		    "http://hardhero.com/author/george-louis/",
		    "http://hardhero.com/famous-celebrities-who-got-cremated/",
		    "http://hardhero.com/category/society/",
		    "http://hardhero.com/tag/cremation/",
		    "http://hardhero.com/tag/funeral/",
		    "http://hardhero.com/tag/funeral-homes/",
		    "http://hardhero.com/tag/funeral-services/",
		    "http://hardhero.com/the-evolution-of-challenge-coins/",
		    "http://hardhero.com/author/roberta-hughes/",
		    "http://hardhero.com/the-evolution-of-challenge-coins/",
		    "http://hardhero.com/category/military/",
		    "http://hardhero.com/tag/challenge-coins/",
		    "http://hardhero.com/tag/currency-coins/",
		    "http://hardhero.com/tag/custom-challenge-coins/",
		    "http://hardhero.com/tag/custom-coins/",
		    "http://hardhero.com/tag/military-coins/",
		    "http://hardhero.com/3-reasons-why-you-should-use-a-portable-storage-container-in-moving/",
		    "http://hardhero.com/author/eric-steele/",
		    "http://hardhero.com/3-reasons-why-you-should-use-a-portable-storage-container-in-moving/",
		    "http://hardhero.com/category/logistics/",
		    "http://hardhero.com/tag/logistics/",
		    "http://hardhero.com/tag/movable-container/",
		    "http://hardhero.com/tag/portable-containers/",
		    "http://hardhero.com/tag/portable-storage-container/",
		    "http://hardhero.com/tag/storage-container/",
		    "http://hardhero.com/tag/transportion/",
		    "http://hardhero.com/callaway-golf-hits-it-big-with-hex-black-tour-and-hex-chrome-balls/",
		    "http://hardhero.com/author/mary-tucker/",
		    "http://hardhero.com/callaway-golf-hits-it-big-with-hex-black-tour-and-hex-chrome-balls/",
		    "http://hardhero.com/category/sports/",
		    "http://hardhero.com/tag/callaway-golf/",
		    "http://hardhero.com/tag/conventional-golf-ball/",
		    "http://hardhero.com/tag/golf-clubs/",
		    "http://hardhero.com/tag/golf-grips/",
		    "http://hardhero.com/the-importance-of-printed-circuit-boards/",
		    "http://hardhero.com/author/malcolm-wagner/",
		    "http://hardhero.com/the-importance-of-printed-circuit-boards/",
		    "http://hardhero.com/category/electronics/",
		    "http://hardhero.com/tag/circuit-boards/",
		    "http://hardhero.com/tag/pc-design/",
		    "http://hardhero.com/tag/pcb/",
		    "http://hardhero.com/tag/pcb-assembly/",
		    "http://hardhero.com/tag/pcb-fabrication/",
		    "http://hardhero.com/tag/printed-circuit-board/",
		    "http://hardhero.com/tag/printed-circuit-boards/",
		    "http://hardhero.com/tag/printed-circuits/",
		    "http://hardhero.com/types-of-lanyard/",
		    "http://hardhero.com/author/lynn-moody/",
		    "http://hardhero.com/types-of-lanyard/",
		    "http://hardhero.com/category/product/",
		    "http://hardhero.com/tag/badge-lanyards/",
		    "http://hardhero.com/tag/breakaway-connector/",
		    "http://hardhero.com/tag/custom-lanyards/",
		    "http://hardhero.com/tag/id-lanyards/",
		    "http://hardhero.com/tag/lanyards/",
		    "http://hardhero.com/tag/logo-lanyards/",
		    "http://hardhero.com/tag/neck-lanyards/",
		    "http://hardhero.com/tag/water-bottle-holder/",
		    "http://hardhero.com/habits-of-aspiring-motivational-speakers-on-parenting/",
		    "http://hardhero.com/author/rita-yates/",
		    "http://hardhero.com/habits-of-aspiring-motivational-speakers-on-parenting/",
		    "http://hardhero.com/category/motivation/",
		    "http://hardhero.com/tag/effective-motivational-speaker/",
		    "http://hardhero.com/tag/good-speaker/",
		    "http://hardhero.com/tag/motivational-speakers/",
		    "http://hardhero.com/tag/quality-speaker/",
		    "http://hardhero.com/tag/speakers/",
		    "http://hardhero.com/things-to-look-for-when-buying-a-long-island-home/",
		    "http://hardhero.com/author/daniel-joshua/",
		    "http://hardhero.com/things-to-look-for-when-buying-a-long-island-home/",
		    "http://hardhero.com/category/real-estate/",
		    "http://hardhero.com/tag/investment/",
		    "http://hardhero.com/tag/long-island-real-estate/",
		    "http://hardhero.com/tag/property/",
		    "http://hardhero.com/tag/real-estate-agent/",
		    "http://hardhero.com/how-the-pawn-shop-business-works/",
		    "http://hardhero.com/helpful-tips-before-going-to-a-pawn-shop/",
		    "http://hardhero.com/characteristics-of-a-great-seo-firm/",
		    "http://hardhero.com/keeping-your-treatment-menu-simple/",
		    "http://hardhero.com/all-about-iron-on-patches/",
		    "http://hardhero.com/2016/10/",
		    "http://hardhero.com/2016/09/",
		    "http://hardhero.com/2016/07/",
		    "http://hardhero.com/2016/03/",
		    "http://hardhero.com/2015/10/",
		    "http://hardhero.com/2015/09/",
		    "http://hardhero.com/2015/08/",
		    "http://hardhero.com/2015/07/",
		    "http://hardhero.com/category/beauty/",
		    "http://hardhero.com/category/electronics/",
		    "http://hardhero.com/category/loan/",
		    "http://hardhero.com/category/logistics/",
		    "http://hardhero.com/category/military/",
		    "http://hardhero.com/category/motivation/",
		    "http://hardhero.com/category/product/",
		    "http://hardhero.com/category/real-estate/",
		    "http://hardhero.com/category/seo/",
		    "http://hardhero.com/category/society/",
		    "http://hardhero.com/category/sports/",
		    "http://hardhero.com/category/web-design/"
		  ],
		  "heading6": {
		    "h6": [
		      "The point is, keep it all simple. To a lot of beauty salon owners, including those at NYBeautyBarSalon.com, providing more options to customers is what seems to be the best thing to do."
		    ],
		    "count6": 1
		  },
		  "encoding": "",
		  "outlinks": [
		    "http://www.care2.com/c2c/people/profile.html?pid=854971260",
		    "http://www.cash4jewelrynow.com/",
		    "http://www.majorpawn.com/",
		    "https://www.seoexplode.com/",
		    "http://nybeautybarsalon.com/",
		    "http://www.patches4less.com/",
		    "http://www.nyseoexplode.co",
		    "http://www.the-lanyard-factory.com/",
		    "http://www.gentrygriffey.com/",
		    "http://www.challengecoins4less.com/",
		    "http://www.moveablecontainer.com/",
		    "http://www.rockbottomgolf.com/grips.html",
		    "http://www.pcbnet.com/",
		    "http://motivational-speaker-success.com/",
		    "http://www.99centarticles.com/",
		    "http://www.chronistsempelis.com/"
		  ],
		  "length_of_meta_description": 81,
		  "length_of_the_title": 16,
		  "language": "en-US",
		  "heading2": {
		    "count2": 15,
		    "h2": [
		      "How the Pawn Shop Business Works",
		      "Helpful Tips Before Going to a Pawn Shop",
		      "Characteristics of a Great SEO Firm",
		      "Keeping Your Treatment Menu Simple",
		      "All about Iron On Patches",
		      "Getting Your Foot In The Door With Proper Web Design \u2013 Hiring A Solid Company",
		      "What You Need to Know About Nylon Lanyards",
		      "Famous Celebrities Who Got Cremated",
		      "THE EVOLUTION OF CHALLENGE COINS",
		      "3 Reasons Why You Should Use a Portable Storage Container in Moving",
		      "Callaway Golf Hits It Big with Hex Black Tour and Hex Chrome+ Balls",
		      "THE IMPORTANCE OF PRINTED CIRCUIT BOARDS",
		      "Types of Lanyard",
		      "Habits of Aspiring Motivational Speakers on Parenting",
		      "Things to Look for When Buying a Long Island Home"
		    ]
		  },
		  "doctype": "<!DOCTYPE html>",
		  "heading3": {
		    "h3": [
		      "It is More Convenient.",
		      "It Provides More Security for your Belongings.",
		      "It can Provide Temporary Storage.",
		      "Introduction",
		      "Advantages",
		      "Disadvantages"
		    ],
		    "count3": 6
		  },
		  "heading4": {
		    "h4": [
		      "\u201cPawn\u201d and \u201ccollateral loan\u201d practically mean the same thing",
		      "Pawn shops make loans at considerably higher interest rates than banks usually charge for personal debt",
		      "The second direct source financial gain for a pawn shop is retail sales",
		      "Decide what you want to do",
		      "Do your Research",
		      "Know the Value of item and Learn to Haggle",
		      "Present your Items in its Best Quality",
		      "Have all the Necessary Documents or Certification",
		      "Understand the Terms and Conditions",
		      "What is Nylon and What\u2019s the Advantage of Using It?",
		      "What are the Possible Customizations and Attachments for Lanyards?",
		      "What are Badge Reels?",
		      "Parenting Habit #1: Give unconditional love to your children.",
		      "Parenting Habit #2: Learn to affectionately touch your children.",
		      "Parenting Habit #3: Be ready to help.",
		      "Parenting Habit #4: Give simple gifts.",
		      "Parenting Habit #5: Spend quality time with your children."
		    ],
		    "count4": 17
		  },
		  "heading5": {
		    "h5": [
		      "Functions of Iron on Patches",
		      "How to Attach an Iron on Patch?",
		      "How to Prepare a Fabric Before Attaching the Iron on Patches?",
		      "The Reason You Need Web Design",
		      "Professional Solutions",
		      "The Mobility Issue",
		      "Amy Winehouse",
		      "Albert Einstein (1879 \u2013 1955)",
		      "John Lennon (1940 \u2013 1980)",
		      "Heath Ledger (1979 \u2013 2008)",
		      "Sir Alfred Hitchcock (1899 \u2013 1980)",
		      "The Neighborhoods",
		      "Tips for Buyers",
		      "Appreciation",
		      "Ownership Pride",
		      "Get Pre-Approved Before Looking for a House",
		      "Deductions in Mortgage Interest",
		      "Preferential Tax Treatment",
		      "Equity Loans",
		      "Getting a Home that will Likely Appreciate",
		      "Getting the Right Real Estate Agent"
		    ],
		    "count5": 21
		  }
		},
	  "flipkart": {
		  "heading1": {
		    "count1": 1,
		    "h1": [
		      "Online shopping in India"
		    ]
		  },
		  "meta_keywords": [
		    "online",
		    " shopping ",
		    "shop",
		    " india",
		    " brands",
		    " fashion",
		    " top",
		    " products",
		    " Mobiles",
		    " Online shopping",
		    " online store"
		  ],
		  "canonical_value": "",
		  "content": "Online Shopping India | Buy Mobiles, Electronics, Appliances, Clothing and More Online at Flipkart.com Sell on Flipkart Advertise Gift Card Download App 24x7 Customer Care Track Order Signup Log In CART0 HELPPaymentsSaved CardsShippingCancellation & ReturnsFAQReport Infringement FLIPKARTContact UsAbout UsCareersFlipkart StoriesPressSell on Flipkart MISCOnline ShoppingAffiliate ProgramGift CardFlipkart First Subscription Track your order Free & easy returns Online cancellations Policies:Returns PolicyTerms of useSecurityPrivacyInfringement© 2007-2017 Flipkart.com. Keep in touch Top Stories : Brand Directory Most searched for on Flipkart: Cloudwalker TVs Valentine's day gifts Redmi Note 4 Google Pixel Offers Bluetooth Speakers Bluetooth Headphones Printers Car Stereos Jbl Speakers Home Theaters Gold Jewellery MI Power banks Lenovo K6 Power Swipe Elite Power Mobiles: Samsung Mobiles Iphones Google Mobiles Huawei Mobiles Leeco Mobiles Lyf Mobiles Oppo Mobiles Lenovo Mobiles Vivo Mobiles Micromax Mobiles Mi Mobiles Xolo Mobiles Honor Mobiles Home: Bedsheets Curtains LED Bulbs Pressure Cookers Kitchen Tools Wall Decals/Stickers Showpieces Wall Clocks Towels Coffee Mugs Irons Mixer Grinders Furniture Camera: Nikon Camera Canon Camera Sony Camera Samsung Camera Canon DSLR Nikon DSLR DSLR Camera Camera Lens Camera Tripod Camera Bags Camera Accessories Laptops: Apple Laptop Acer Laptop Lenovo Laptop Dell Laptop Asus Laptop HP Laptop Gaming Laptops Entertainment Laptops EveryDay Use laptop Laptop Bags Laptop Accessories TVs: Vu TV 40 inches TV 32 inches TV Samsung TV Sony TV Panasonic TV LG TV Micromax TV Smart TV 4K TV LED TV Curved TV Clothing: Men Shirts Men Jeans Men T-Shirts Men Suits Men Trousers Mens Blazers Women Shirts Women Jeans Kurtis Dresses Sarees Salwar Suits Skirts Lehenga Choli Anarkali Lifestyle Accessories: Watches Fastrack Watches Titan Watches Maxima Watches Casio Watches Sonata Watches Fossil Watches Citizen Watches Sunglasses Ray Ban Sunglasses Wallets Handbags Bags Luggage & Travel Bags American Tourister Bags Footwear: Casual Shoes Nike Shoes Adidas Shoes Reebok Shoes Puma Shoes Bata Shoes Woodland Shoes Fila Shoes Crocs Shoes Footwear Sports Shoes Running Shoes PAYMENT METHOD Mail Us: Flipkart Internet Private Limited, Ozone Manay Tech Park, #56/18 & 55/09, 7th Floor, Garvebhavipalya, Hosur Road, Bangalore - 560068, Karnataka, India. Registered Office Address: Flipkart Internet Private Limited, Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block, Koramangala, Bengaluru - 560034 India CIN : U51109KA2012PTC066107 Telephone: 1800 208 9898 Email : cs@flipkart.com Online shopping in IndiaGone are the days, when you had to go on exhausting shopping trips and wait in long queues to buy something. Today, with online shopping, everything you need is right at your fingertips. For instance, there's this big party thrown by your friend, or your sister's getting married, and you need a new dress, in fact you need more than one dress, you need matching shoes, accessories, bags and makeup. You have to get all these things soon, possibly before the weekend. And you can't even take a day off from work to go shopping in a crowded mall. What do you do? You can't delegate someone else to buy these things for you. What if they bring something you don't like? You can't even return those things and get your money back. Flipkart Assured Flipkart makes online shopping as hassle-free as possible. You can always rest assured about the quality of products you are buying online at our site. Together with our trusted partners we promise to deliver only original and brand-new products, with the correct bill. Almost all the top products at our site have the Flipkart Assured badge on them, guaranteeing that they have gone through six stages of rigorous quality checks. You can see the F-Assured badge on all popular categories such as mobiles, electronics, home & furnishing, personal appliances and fashion. Easy Return and Replacement Policies Imagine you've bought an expensive jacket from Mango, or a pair of Steve Madden heels; the price, color, everything was to your liking when you ordered the product at our site. But when the order reached you, you found the color of the jacket not to your liking or the shoes a tad bit loose or tight; or say you are unhappy with the product for some reason, you can easily return the product and get your money back. Or you can also return it and ask for another size, without paying extra money. Online shopping at our site also makes sure that you enjoy faster delivery. EMI Makes Everything Affordable So you need a new washing machine or a new smartphone. Since they don't come cheap, buying them will need a lot of money. Although your payday is just around the corner, you have other commitments too, and you cannot pay for the washing machine or mobile in one shot. What will you do? Beg, borrow, steal? There's no need to resort to any of these desperate measures, especially when you can buy your favourite products at EMI from our online store. Want To Understand a Product Better? Check Our Buying Guides So you are planning to buy a refrigerator for your home, or you want to invest in some gym equipment, but you don't understand head or tail about these products. When you look at the products and their huge list of specifications, things look Greek and Latin to you. You decide to listen to your colleague and end up buying a refrigerator that you don't like. Or you spend thousands on gym equipment that you didnâ\u0080\u0099t really need. Rather than making such an expensive mistake, go through our buying guides for various categories of products and make your online shopping experience the best ever. Shop On the App So you are stuck in a traffic jam, or you are relaxing on a lazy Sunday afternoon. You don't feel like booting up your laptop in your free time. We have a great idea, listen to your playlist, relax and also shop for your favourite products on-the-go on our mobile app. So, what are you shopping for today? Back to top",
		  "img_src": [
		    "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-logo_9fddff.png"
		  ],
		  "title": "Online Shopping India | Buy Mobiles, Electronics, Appliances, Clothing and More Online at Flipkart.com",
		  "meta_description": "Online Shopping in India for Mobiles, Electronics, Men & Women Clothing, Shoes at Flipkart.  wide range of original products with cash on delivery and free shipping options at flipkart.com",
		  "favicon": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/fk-logo_9fddff.png",
		  "alt": [
		    "Flipkart"
		  ],
		  "inlinks": [
		    "https://www.flipkart.com?otracker=undefined_footer_navlinks"
		  ],
		  "heading6": {
		    "h6": [
		      
		    ],
		    "count6": 0
		  },
		  "encoding": "text/html; charset=utf-8",
		  "outlinks": [
		    "https://seller.flipkart.com/?utm_source=flipkart&utm_medium=website&utm_campaign=sellbutton",
		    "http://ads.flipkart.com/?otracker=ch_vn_advertise_header",
		    "/buy-gift-voucher?otracker=ch_vn_gift-voucher",
		    "/mobile-apps?otracker=ch_vn_mobile_apps",
		    "/s/contact",
		    "/account/orders",
		    "/notifications?otracker=Notifications_view_all",
		    "/account/login?signup=true",
		    "/account/login?ret=/",
		    "/",
		    "/viewcart?otracker=Cart_Icon_Click",
		    "/s/help/payments?otracker=undefined_footer_navlinks",
		    "/help/savedcard_how?otracker=undefined_footer_navlinks",
		    "/s/help/shipping?otracker=undefined_footer_navlinks",
		    "/s/help/cancellation-returns?otracker=undefined_footer_navlinks",
		    "/s/help?otracker=undefined_footer_navlinks",
		    "https://seller.flipkart.com/fiv?otracker=undefined_footer_navlinks",
		    "/s/contact?otracker=undefined_footer_navlinks",
		    "/about-us?otracker=undefined_footer_navlinks",
		    "/ol?link=http%3A%2F%2Fwww.flipkartcareers.com%2F&otracker=undefined_footer_navlinks",
		    "http://stories.flipkart.com/?otracker=undefined_footer_navlinks",
		    "/s/press?otracker=undefined_footer_navlinks",
		    "https://seller.flipkart.com/?utm_source=flipkart&utm_medium=website&utm_campaign=sellbutton",
		    "https://affiliate.flipkart.com?otracker=undefined_footer_navlinks",
		    "/buy-gift-voucher?otracker=undefined_footer_navlinks",
		    "/flipkart-first?otracker=undefined_footer_navlinks",
		    "/mobile-apps?otracker=undefined_footer_navlinks",
		    "/returnpolicy",
		    "/s/terms",
		    "/s/paymentsecurity",
		    "/s/privacypolicy",
		    "https://seller.flipkart.com/fiv",
		    "/ol?link=http://www.facebook.com/flipkart",
		    "/ol?link=http://www.twitter.com/flipkart",
		    "/ol?link=https://plus.google.com/109591199284807005836/posts",
		    "/ol?link=http://www.youtube.com/flipkart",
		    "/brands",
		    "/home-entertainment/televisions/~cloudwalker-tvs/pr?sid=ckf,czl&otracker=undefined_footer_footer",
		    "/valentines-day-store?otracker=undefined_footer_footer",
		    "/mobiles/~redmi-note-4/pr?sid=tyy%2C4io&otracker=undefined_footer_footer",
		    "/mobiles-accessories/mobiles/~pixel-phones/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/offers?otracker=undefined_footer_footer",
		    "/q/bluetooth-speakers?otracker=undefined_footer_footer",
		    "/mobile-accessories/bluetooth-headphones-with-mic/pr?sid=tyy,4mr,qtx&otracker=undefined_footer_footer",
		    "/computers/printers-inks/printers/pr?sid=6bo,ffn,t64&otracker=undefined_footer_footer",
		    "/automotive/car-stereo/pr?sid=0hx,bwd,tko,jxo,6ta&otracker=undefined_footer_footer",
		    "/mobile-accessories/speakers/jbl~brand/pr?sid=tyy,4mr,5ev&otracker=undefined_footer_footer",
		    "/home-entertainment/video-players-accessories/home-theaters/pr?sid=ckf,see,mi3&otracker=undefined_footer_footer",
		    "/jewellery/gold~material/pr?sid=mcr&otracker=undefined_footer_footer",
		    "/mobile-accessories/power-banks/mi~brand/pr?sid=tyy,4mr,fu6&otracker=undefined_footer_footer",
		    "/mobiles/~lenovo-k6-power/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/swipe-elite-power-space-grey-16-gb/p/itmeqbjfj3wj5rn8?pid=MOBEQBJFB5YWCJYE&otracker=undefined_footer_footer",
		    "/mobiles/samsung~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/Apple~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/google~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/huawei~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/leeco~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/lyf~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/oppo~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/lenovo~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/vivo~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/micromax~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/mi~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/xolo~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/mobiles/honor~brand/pr?sid=tyy,4io&otracker=undefined_footer_footer",
		    "/home-furnishing/bed-linen/bedsheets/pr?sid=vdm,uj4,64i&otracker=undefined_footer_footer",
		    "/home-furnishing/curtains-accessories/pr?sid=vdm,lb9&otracker=undefined_footer_footer",
		    "/household/lighting/bulbs/pr?sid=r4l,paf,m99&otracker=undefined_footer_footer",
		    "/household/pressure-cookers-pans/pr?sid=r4l,u3r&otracker=undefined_footer_footer",
		    "/household/kitchen-tools?otracker=undefined_footer_footer",
		    "/home-decor/wall-decor-clocks/wall-decals-stickers/pr?sid=1m7,att,wrz&otracker=undefined_footer_footer",
		    "/home-decor/showpiece/pr?sid=1m7,zqy&otracker=undefined_footer_footer",
		    "/watches/clocks/wall-clocks/pr?sid=r18%2C4ub%2C3gt&otracker=undefined_footer_footer",
		    "/home-furnishing/bath/bath-towels/pr?sid=vdm,v28,zs1&otracker=undefined_footer_footer",
		    "/household/coffee-mugs/pr?sid=r4l%2Cajv&otracker=undefined_footer_footer",
		    "/home-kitchen/home-appliances/iron/pr?sid=j9e,abm,a0u&otracker=undefined_footer_footer",
		    "/home-kitchen/kitchen-appliances/mixer-juicer-grinders/pr?sid=j9e,m38,7ek&otracker=undefined_footer_footer",
		    "/furniture-clp-store?otracker=undefined_footer_footer",
		    "/q/nikon-cameras?otracker=undefined_footer_footer",
		    "/q/canon-cameras?otracker=undefined_footer_footer",
		    "/q/sony-cameras?otracker=undefined_footer_footer",
		    "/cameras/samsung~brand/pr?sid=jek,p31&otracker=undefined_footer_footer",
		    "/q/canon-dslr-cameras?otracker=undefined_footer_footer",
		    "/q/nikon-dslr-cameras?otracker=undefined_footer_footer",
		    "/cameras/dslr~type/pr?sid=jek,p31&otracker=undefined_footer_footer",
		    "/camera-accessories/lenses/pr?sid=jek,6l2,e9y&otracker=undefined_footer_footer",
		    "/camera-accessories/tripods/pr?sid=jek,6l2,ce6&otracker=undefined_footer_footer",
		    "/camera-accessories/camera-bags/pr?sid=jek,6l2,6ts&otracker=undefined_footer_footer",
		    "/cameras/accessories?otracker=undefined_footer_footer",
		    "/laptops/apple~brand/pr?sid=6bo,b5g&otracker=undefined_footer_footer",
		    "/laptops/acer~brand/pr?sid=6bo,b5g&otracker=undefined_footer_footer",
		    "/laptops/lenovo~brand/pr?sid=6bo%2Cb5g&otracker=undefined_footer_footer",
		    "/laptops/dell~brand/pr?sid=6bo%2Cb5g&otracker=undefined_footer_footer",
		    "/laptops/asus~brand/pr?sid=6bo,b5g&otracker=undefined_footer_footer",
		    "/laptops/hp~brand/pr?sid=6bo%2Cb5g&otracker=undefined_footer_footer",
		    "/laptops/gaming~lifestyle/pr?sid=6bo%2Cb5g&otracker=undefined_footer_footer",
		    "/laptops/entertainment~lifestyle/pr?sid=6bo%2Cb5g&otracker=undefined_footer_footer",
		    "/laptops/everyday-use~lifestyle/pr?sid=6bo%2Cb5g&otracker=undefined_footer_footer",
		    "/bags-wallets-belts/bags/laptop-bags/pr?sid=reh,ihu,q4f&otracker=undefined_footer_footer",
		    "/laptop-accessories/pr?sid=6bo,ai3&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/vu~brand/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/q/40-inches-led-tv?otracker=undefined_footer_footer",
		    "/q/32-inches-led-tv?otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/samsung~brand/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/sony~brand/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/panasonic~brand/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/lg~brand/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/micromax~brand/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/smart-tv~features/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/ultra-hd-4k-~resolution/pr?sid=ckf,czl&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/led~screen-type/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/home-entertainment/televisions/curved-tv~features/pr?sid=ckf%2Cczl&otracker=undefined_footer_footer",
		    "/mens-clothing/shirts/pr?sid=2oq,s9b,mg4&otracker=undefined_footer_footer",
		    "/mens-clothing/jeans/pr?sid=2oq,s9b,94h&otracker=undefined_footer_footer",
		    "/mens-clothing/tshirts/pr?sid=2oq,s9b,j9y&otracker=undefined_footer_footer",
		    "/mens-clothing/suits-blazers/suits/pr?sid=2oq,s9b,q9f,uf9&otracker=undefined_footer_footer",
		    "/mens-clothing/trousers/pr?sid=2oq,s9b,9uj&otracker=undefined_footer_footer",
		    "/mens-clothing/suits-blazers/blazers/pr?sid=2oq,s9b,q9f,gev&otracker=undefined_footer_footer",
		    "/womens-clothing/western-wear/shirts-tops-tunics/shirts/pr?sid=2oq,c1r,ha6,cck,n2c&otracker=undefined_footer_footer",
		    "/womens-clothing/western-wear/jeans-shorts/jeans/pr?sid=2oq,c1r,ha6,uuk,q02&otracker=undefined_footer_footer",
		    "/womens-clothing/ethnic-wear/kurtas-kurtis/kurtis/pr?sid=2oq,c1r,3pj,ua6,cjg&otracker=undefined_footer_footer",
		    "/womens-clothing/western-wear/dresses-skirts/dresses/pr?sid=2oq,c1r,ha6,xzt,3y0&otracker=undefined_footer_footer",
		    "/womens-clothing/ethnic-wear/sarees/pr?sid=2oq,c1r,3pj,7od&otracker=undefined_footer_footer",
		    "/womens-clothing/ethnic-wear/salwar-suits/pr?sid=2oq,c1r,3pj,qlq&otracker=undefined_footer_footer",
		    "/womens-clothing/western-wear/dresses-skirts/skirts/pr?sid=2oq,c1r,ha6,xzt,u0w&otracker=undefined_footer_footer",
		    "/womens-clothing/ethnic-wear/lehenga-cholis/pr?sid=2oq,c1r,3pj,t5i&otracker=undefined_footer_footer",
		    "/womens-clothing/anarkali~type/pr?sid=2oq,c1r&otracker=undefined_footer_footer",
		    "/watches/pr?sid=r18&otracker=undefined_footer_footer",
		    "/watches/fastrack~brand/pr?sid=r18&otracker=undefined_footer_footer",
		    "/watches/titan~brand/pr?sid=r18&otracker=undefined_footer_footer",
		    "/watches/maxima~brand/pr?sid=r18&otracker=undefined_footer_footer",
		    "/watches/casio~brand/pr?sid=r18&otracker=undefined_footer_footer",
		    "/watches/sonata~brand/pr?sid=r18&otracker=undefined_footer_footer",
		    "/watches/fossil~brand/pr?sid=r18&otracker=undefined_footer_footer",
		    "/watches/citizen~brand/pr?sid=r18&otracker=undefined_footer_footer",
		    "/sunglasses/pr?sid=26x&otracker=undefined_footer_footer",
		    "/sunglasses/ray-ban~brand/pr?sid=26x&otracker=undefined_footer_footer",
		    "/bags-wallets-belts/wallets-clutches/wallets/pr?sid=reh,cca,h76&otracker=undefined_footer_footer",
		    "/bags-wallets-belts/bags/hand-bags/pr?sid=reh,ihu,m08&otracker=undefined_footer_footer",
		    "/bags-wallets-belts/bags/pr?sid=reh,ihu&otracker=undefined_footer_footer",
		    "/bags-wallets-belts/luggage-travel/pr?sid=reh,plk&otracker=undefined_footer_footer",
		    "/bags-wallets-belts/bags/american-tourister~brand/pr?sid=reh,ihu&otracker=undefined_footer_footer",
		    "/q/casual-shoes?otracker=undefined_footer_footer",
		    "/q/nike-shoes?otracker=undefined_footer_footer",
		    "/q/adidas-shoes?otracker=undefined_footer_footer",
		    "/q/reebok-shoes?otracker=undefined_footer_footer",
		    "/q/puma-shoes?otracker=undefined_footer_footer",
		    "/q/bata-shoes?otracker=undefined_footer_footer",
		    "/q/woodland-shoes?otracker=undefined_footer_footer",
		    "/q/fila-shoes?otracker=undefined_footer_footer",
		    "/q/crocs-shoes?otracker=undefined_footer_footer",
		    "/footwear?otracker=undefined_footer_footer",
		    "/mens-footwear/mens-sports-shoes/pr?sid=osp,cil,1cu&otracker=undefined_footer_footer",
		    "/mens-footwear/sports-shoes/running-shoes~type/pr?sid=osp,cil,1cu&otracker=undefined_footer_footer",
		    "tel:18002089898",
		    "mailto:cs@flipkart.com",
		    "/footwear/pr?sid=osp",
		    "/mobiles",
		    "/home-furnishing-store",
		    "/personal-care-appliances-women-store",
		    "/mens-clothing/winter-seasonal-wear/jackets/pr?sid=2oq,s9b,qgu,8cd",
		    "/home-kitchen/home-appliances/washing-machines",
		    "/home-kitchen/home-appliances/refrigerators",
		    "/sports-fitness/fitness-accessories/home-gym-equipment/pr?sid=dep,xnh,ikc"
		  ],
		  "length_of_meta_description": 188,
		  "length_of_the_title": 102,
		  "language": "en",
		  "heading2": {
		    "count2": 1,
		    "h2": [
		      "PAYMENT METHOD"
		    ]
		  },
		  "doctype": "<!DOCTYPE html>",
		  "heading3": {
		    "h3": [
		      
		    ],
		    "count3": 0
		  },
		  "heading4": {
		    "h4": [
		      
		    ],
		    "count4": 0
		  },
		  "heading5": {
		    "h5": [
		      
		    ],
		    "count5": 0
		  }
		}
	}

	$scope.config = {
    title: 'Pie Chart',
    subtitle: 'Pie Chart Subtitle',
    debug: true,
	};

	$scope.test_obj = {
		name:"manoj",
		email:"manoj@gmail.com",
		role:"user",
		other1:{
			gender:"male",
			mobile:"1234567899",
			status:"active"
		}
	}

	$scope.no_data_found = false;
	$scope.get_webpage_details = function($event,url){
		if($event){
			$event.preventDefault();
		}
		$scope.html_data_json = {};
		$scope.data_processing_onserver = true;
		$http.get("/dashboard/api_get_webpage_details/"+url)
		.success(function(data){
			if(data.status == 200){
				var data = JSON.parse(data.data);
				$scope.data_processing_onserver = false;
				$scope.html_data_json = data.content;
			}
		})
		.error(function(err){
			$scope.data_processing_onserver = false;
			console.log("There is some error to get web details !");
		});

		if($scope.html_data_json.inlinks && ($scope.html_data_json.inlinks.length || $scope.html_data_json.outlinks.length)){
			$scope.pageload = {
		    name: 'Page-In links',
		    datapoints: [
		      { x: 'Inlinks', y: $scope.html_data_json.inlinks.length },
		      { x: 'Outlinks', y: $scope.html_data_json.outlinks.length },
		    ]
			};
			$scope.data = [ $scope.pageload ];
		}else{
			$scope.pageload = {
		    name: 'Page-In links',
		    datapoints: [
		      { x: 'Inlinks', y: 12 },
		      { x: 'Outlinks', y: 45 },
		    ]
			};
		}
	}

	/*$scope.get_webpage_details = function($event,url){
		if($event){
			$event.preventDefault();
		}
		$scope.html_data_json = {};
		$scope.data_processing_onserver = true;
		if(url == "www.seoexplode.com"){
			$scope.html_data_json = $scope.html_data.seoexplode;
		}else if(url == "www.hardhero.com"){
			$scope.html_data_json = $scope.html_data.hardhero;
		}else if(url == "www.flipkart.com"){
			$scope.html_data_json = $scope.html_data.flipkart;
		}else{
			// $scope.no_data_found = true;
		}
		if($scope.html_data_json.inlinks && ($scope.html_data_json.inlinks.length || $scope.html_data_json.outlinks.length)){
			$scope.pageload = {
		    name: 'Page-In links',
		    datapoints: [
		      { x: 'Inlinks', y: $scope.html_data_json.inlinks.length },
		      { x: 'Outlinks', y: $scope.html_data_json.outlinks.length },
		    ]
			};
			
			$scope.data = [ $scope.pageload ];
		}else{
			$scope.pageload = {
		    name: 'Page-In links',
		    datapoints: [
		      { x: 'Inlinks', y: 12 },
		      { x: 'Outlinks', y: 45 },
		    ]
			};
		}
	
		$timeout(function(){
			$scope.data_processing_onserver = false;
		},1000);
	}*/

	// HOME PAGE
	$scope.login_type = '';
	$scope.user_form = {
		email:"",
		password:""
	}
	$scope.language_arr = [
		{
			icon:"india.png",
			name:"India",
			short_name:"IN"
		},
		{
			icon:"us.png",
			name:"United States",
			short_name:"US"
		},
		{
			icon:"au.png",
			name:"Australia",
			short_name:"AU"
		},
		{
			icon:"uk.png",
			name:"United Kingdom",
			short_name:"UK"
		}
	]
	$scope.current_language = $scope.language_arr[0];
	$scope.set_language = function($event,obj){
		$event.preventDefault();
		$scope.current_language = obj;

		}
	$scope.show_free_signup_modal = function($event){
		$event.preventDefault();
		$scope.user_form = {
			email:"",
			password:""
		}
		$scope.login_type = 'login';
		$("#signup-modal").modal({ show:true, backdrop:'static', keyboard:false });
	}
	$scope.click_on_login = function($event,type){
		$event.preventDefault();
		$scope.login_type = type;
		$scope.user_form = {
			email:"",
			password:""
		}
	}
	$scope.web_search_form = [
		{
			type:'website',
			placeholder:"Website URL",
			value:""
		}
	]
	$scope.is_showKeywordInput = true;
	$scope.add_new_search_input = function($event,type){
		$event.preventDefault();
		var keywords_length = $.grep($scope.web_search_form, function(e){ return e.type == 'keyword' });
		$scope.is_showKeywordInput = true;
		if(keywords_length.length == 3){
			$scope.is_showKeywordInput = false;
		}
		if(type == 'website'){
			$scope.web_search_form.push(
				{
					type:'competitor',
					placeholder:"Competitor URL",
					value:""
				}
			)
		}else if(type == 'competitor' || type == 'keyword'){
			$scope.web_search_form.push(
				{
					type:'keyword',
					placeholder:"Keyword",
					value:""
				}
			)
		}
	}

	$scope.remove_search_input = function($event,obj){
		$event.preventDefault();
		$scope.is_showKeywordInput = true;
		$scope.web_search_form.splice($scope.web_search_form.indexOf(obj), 1);
	}

});