'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import '@cloudscape-design/global-styles';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import React from 'react';
import {
  AppLayout,
  AppLayoutProps,
  Container,
  ContentLayout,
  Flashbar,
  FlashbarProps,
  HelpPanel,
  SideNavigation,

} from '@cloudscape-design/components';
import { I18nProvider } from '@cloudscape-design/components/i18n';
import messages from '@cloudscape-design/components/i18n/messages/all.en';
import { disableMotion } from '@cloudscape-design/global-styles';


const inter = Inter({ subsets: ['latin'] })

const LOCALE = 'en';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
   
 
  const [Searchvalue, setSearchValue] = React.useState("");
  const [splitPanelPref,setsplitPanelPref]= React.useState<AppLayoutProps.SplitPanelPreferences>({position: 'side'});
  const [toolsOpen, setToolsOpen] = React.useState(false);
 
  const [SideNavigationVisibility, setSideNavigationVisibility] = React.useState(false);
  const [items, setItems] = React.useState<FlashbarProps.MessageDefinition[]>([
  
  
    {
      type: "info",
      dismissible: true,
      dismissLabel: "Dismiss message",
      onDismiss: () => setItems([]),
      content: (<> <p>Salemou alaykom</p></> ),
      id: "message_1"
    }
  ]);



  return (
    
      <html lang="en">
        <body className={inter.className}>
        <TopNavigation
      identity={{
        href: "/home",
        title: "Nutrimax",
        // logo: {
        //   src: "",
        //   alt: "Service"
        // }
      }}
      // utilities={[
        
      //   {
      //     type: "button",
      //     iconName: "notification",
      //     title: "Notifications",
      //     ariaLabel: "Notifications (unread)",
      //     badge: true,
      //     disableUtilityCollapse: false
      //   },
        
      //   {
      //     type: "menu-dropdown",
      //     text: "hi",
      //     description: "email@example.com",
      //     iconName: "user-profile",
      //     items: [
      //       { id: "profile", text: "Profile" },
      //       { id: "preferences", text: "Preferences" },
      //       { id: "security", text: "Security" },
      //       {
      //         id: "support-group",
      //         text: "Support",
      //         items: [
      //           {
      //             id: "documentation",
      //             text: "Documentation",
      //             href: "#",
      //             external: true,
      //             externalIconAriaLabel:
      //               " (opens in new tab)"
      //           },
      //           { id: "support", text: "Support" },
      //           {
      //             id: "feedback",
      //             text: "Feedback",
      //             href: "#",
      //             external: true,
      //             externalIconAriaLabel:
      //               " (opens in new tab)"
      //           }
      //         ]
      //       },
      //       { id: "signout", text: "Sign out" }
      //     ]
      //   }
      // ]}
    />
        <I18nProvider locale={LOCALE} messages={[messages]}>
      <AppLayout
        
        onNavigationChange={(x) => {setSideNavigationVisibility(x.detail.open)}}
        navigationHide={true}
        navigationOpen= {SideNavigationVisibility}
        navigation={
          <SideNavigation
            header={{
              href: '',
              text: 'Categories',
            }}
            items={[{ type: 'link', text: `Fruit`, href: `#` },
                    { type: 'link', text: `Vegetables`, href: `#` },
                    { type: 'link', text: `Meat`, href: `#` },
                    { type: 'link', text: `Dairy Products`, href: `#` },
                    { type: 'link', text: `nuts`, href: `#` }
          ]}
            
          />
        }
        toolsHide={true}
        notifications={
          <Flashbar items={[]}/>
        }
        onToolsChange={(x) => setToolsOpen(x.detail.open)}
        toolsOpen={toolsOpen}
        tools={<HelpPanel header={<h2>Overview</h2>}>Help content</HelpPanel>}
        content=
                
        {children} 
         
      />
    </I18nProvider>
        </body>
      </html>
    
  )
}
