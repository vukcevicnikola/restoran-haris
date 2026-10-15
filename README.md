# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button";
```


## Netcup opening localhost port:3000

cat >> ~/.bashrc << 'EOF'

# Dev port shortcuts
alias dev-open='sudo ufw allow 3000/tcp'
alias dev-close='sudo ufw delete allow 3000/tcp'
alias dev-status='sudo ufw status'
EOF
source ~/.bashrc

dev-open opens port 3000
dev-close closes it
dev-status shows the firewall rules