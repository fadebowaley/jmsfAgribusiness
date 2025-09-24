# Contentful Blog Setup Guide

This guide will help you set up Contentful as the content management system for your JMSF Agribusiness blog.

## Step 1: Create Contentful Account

1. Go to [Contentful.com](https://www.contentful.com)
2. Sign up for a free account
3. Create a new space (e.g., "JMSF Agribusiness Blog")

## Step 2: Content Models Setup

### Blog Post Content Model

Create a content model called "Blog Post" with these fields:

| Field Name     | Field ID      | Type        | Required | Description               |
| -------------- | ------------- | ----------- | -------- | ------------------------- |
| Title          | title         | Text        | Yes      | Blog post title           |
| Slug           | slug          | Text        | Yes      | URL-friendly identifier   |
| Excerpt        | excerpt       | Text        | No       | Short description/summary |
| Content        | content       | Rich Text   | Yes      | Main blog content         |
| Featured Image | featuredImage | Media       | No       | Main blog image           |
| Author         | author        | Reference   | No       | Link to Author model      |
| Publish Date   | publishDate   | Date & Time | No       | When to publish           |
| Tags           | tags          | Text (List) | No       | Blog tags                 |
| Category       | category      | Reference   | No       | Link to Category model    |

### Blog Category Content Model

Create a content model called "Blog Category":

| Field Name  | Field ID    | Type | Required | Description             |
| ----------- | ----------- | ---- | -------- | ----------------------- |
| Name        | name        | Text | Yes      | Category name           |
| Slug        | slug        | Text | Yes      | URL-friendly identifier |
| Description | description | Text | No       | Category description    |

### Author Content Model

Create a content model called "Author":

| Field Name    | Field ID     | Type  | Required | Description      |
| ------------- | ------------ | ----- | -------- | ---------------- |
| Name          | name         | Text  | Yes      | Author name      |
| Bio           | bio          | Text  | No       | Author biography |
| Profile Image | profileImage | Media | No       | Author photo     |
| Email         | email        | Text  | No       | Contact email    |

## Step 3: Environment Variables

Create a `.env` file in your project root:

```bash
# Contentful Configuration
VITE_CONTENTFUL_SPACE_ID=your_space_id_here
VITE_CONTENTFUL_ACCESS_TOKEN=your_content_delivery_api_key
VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_key
VITE_CONTENTFUL_ENVIRONMENT=master
```

### How to get these values:

1. **Space ID**: In Contentful, go to Settings → General Settings
2. **Content Delivery API Key**: Go to Settings → API Keys → Content delivery / preview tokens → Add API Key
3. **Preview API Key**: Same location as above, copy the Preview API Key

## Step 4: Sample Content

Create some sample blog posts to test the system:

### Sample Blog Post 1:

- **Title**: "Sustainable Farming Practices in Nigeria"
- **Slug**: "sustainable-farming-practices-nigeria"
- **Excerpt**: "Exploring innovative and sustainable farming methods that are transforming agricultural productivity across Nigeria."
- **Content**: Write about sustainable farming practices, their benefits, and implementation strategies.
- **Tags**: ["Sustainability", "Nigeria", "Innovation", "Farming"]

### Sample Blog Post 2:

- **Title**: "The Future of Agricultural Technology"
- **Slug**: "future-agricultural-technology"
- **Excerpt**: "How emerging technologies are revolutionizing the agricultural sector and creating new opportunities for farmers."
- **Content**: Discuss AgTech trends, IoT in farming, precision agriculture, etc.
- **Tags**: ["Technology", "AgTech", "Innovation", "Future"]

### Sample Categories:

1. **Technology** (slug: technology)
2. **Sustainability** (slug: sustainability)
3. **Market Insights** (slug: market-insights)
4. **Policy & Regulation** (slug: policy-regulation)

## Step 5: Testing the Integration

1. Make sure your environment variables are set correctly
2. Restart your development server: `npm run dev`
3. Navigate to `/blogs` to see your blog posts
4. Click on a blog post to view the detailed page
5. Check that images and rich text content display correctly

## Step 6: Content Management Workflow

### Adding New Blog Posts:

1. Log into your Contentful dashboard
2. Go to Content → Add entry → Blog Post
3. Fill in all required fields
4. Upload a featured image
5. Write your content using the rich text editor
6. Add tags and select a category
7. Set publish date
8. Publish the entry

### Content Guidelines:

- **Title**: Keep under 60 characters for SEO
- **Slug**: Use lowercase with hyphens (auto-generated from title)
- **Excerpt**: 150-160 characters work best for meta descriptions
- **Featured Image**: Recommended size 1200x630px for social sharing
- **Content**: Use headings, bullet points, and images to break up text
- **Tags**: Use 3-5 relevant tags per post

## Step 7: Advanced Features (Optional)

### Rich Text Enhancement:

- Embed images within content
- Add hyperlinks to external resources
- Create internal links between blog posts
- Use formatting (bold, italic, quotes)

### SEO Optimization:

- Add a "Meta Description" field for custom excerpts
- Include "Focus Keyword" field for SEO targeting
- Add "Featured" boolean field for highlighting important posts

### Content Scheduling:

- Use the "Publish Date" field to schedule future posts
- Create "Draft" vs "Published" status workflow

## Troubleshooting

### Common Issues:

1. **Images not loading**: Check that image URLs include `https:`
2. **No content showing**: Verify API keys and space ID are correct
3. **Rich text not formatting**: Check that content model uses "Rich Text" field type
4. **404 errors**: Ensure slugs don't contain special characters

### Fallback Behavior:

If Contentful is unavailable or not configured, the system will automatically display fallback content so your site continues to work.

## Support

For additional help:

- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Contentful Community](https://www.contentfulcommunity.com/)
- Contact the development team for technical assistance

---

**Note**: This implementation provides a robust, scalable blogging system that can grow with your business while maintaining professional content management capabilities.
