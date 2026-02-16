---
title: iFrame
slug: /widgets/iframe
sidebar_position: 60
---

# iFrame Widget

## Overview

The iFrame widget embeds external web content directly into your dashboard, allowing integration of third-party applications, reports, and web pages alongside your IoT data.

## Use Cases

- **External Applications** - Embed external tools and dashboards
- **Reports** - Display reports from other systems
- **Documentation** - Embed online documentation
- **Web Services** - Integrate web-based services
- **Third-Party Dashboards** - Show dashboards from other platforms

## Key Features

- Embed any web URL
- Responsive sizing

## Configuration

The iFrame widget is a standalone widget that doesn't require measures or properties. It embeds external web content directly into your dashboard.

### Basic Settings

| Field   | Required | Description          |
| ------- | -------- | -------------------- |
| **URL** | ✅ Yes   | Web address to embed |

### Display Options

- **Transparent Background** - Remove widget background using the `transparent` style property
- **Background Color** - Set custom background color
- **Border Color** - Set custom border color

## Security Considerations

:::warning Security
**Always verify the trustworthiness of embedded URLs.** Only embed content from trusted sources to prevent security risks.
:::

### Security Best Practices

1. **HTTPS Only** - Use HTTPS URLs when possible
2. **Trusted Sources** - Only embed trusted domains
3. **Content Security** - Be aware of embedded content permissions
4. **User Authentication** - Consider authentication requirements
5. **Regular Review** - Review embedded content regularly

## Common Issues

### iFrame Blocked

Some websites prevent embedding via X-Frame-Options headers:

- **Solution**: Check if site allows embedding
- **Alternative**: Use direct links instead
- **Workaround**: Contact site owner for embedding permissions

### Content Not Loading

- **Check URL**: Verify URL is correct and accessible
- **HTTPS**: Ensure correct protocol (http vs https)
- **Network**: Check network connectivity
- **CORS Policy**: Verify cross-origin policy

### Authentication Issues

- **Login Required**: Some sites require login
- **Session Timeout**: Sessions may expire
- **SSO Integration**: Consider single sign-on needs

## Best Practices

1. **URL Testing** - Test URLs before deployment
2. **Responsive Design** - Ensure content is responsive
3. **Loading Indicators** - Show loading state
4. **Error Handling** - Handle failed loads gracefully
5. **Performance** - Consider impact on dashboard load time

---

## What's Next?

- [Container Widget](/docs/widgets/container) - For organizing widgets
- [Dashboards](/docs/dashboards/dashboards) - Learn about dashboard features
