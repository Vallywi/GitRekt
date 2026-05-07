'use client';

import AppLayout from '../../components/AppLayout';
import { useState } from 'react';

export default function MessagesPage() {
  const [message, setMessage] = useState('');

  return (
    <AppLayout>
      <div className="flex-1 flex overflow-hidden lg:pt-0 pt-16 h-[calc(100vh-80px)] lg:h-screen">
        {/* Left Sidebar: Channels & Teammates */}
        <aside className="w-72 border-r border-outline-variant/20 glass-panel flex flex-col m-sm rounded-xl overflow-hidden hidden md:flex shrink-0">
          {/* Search */}
          <div className="p-sm border-b border-outline-variant/10">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
              <input className="w-full bg-surface-container-high/50 border-none rounded-lg py-xs pl-10 pr-xs text-body-sm font-body-sm text-on-surface focus:ring-1 focus:ring-primary focus:bg-surface-container-high transition-all" placeholder="Search chats..." type="text"/>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-sm space-y-lg custom-scrollbar">
            {/* Team Channels */}
            <div>
              <h3 className="font-label-caps text-label-caps text-outline mb-xs px-xs">Team Channels</h3>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-xs px-xs py-2 rounded-lg bg-primary/10 text-primary font-body-sm text-body-sm font-medium">
                  <span className="material-symbols-outlined text-sm">tag</span>
                  <span>frontend-core</span>
                  <span className="ml-auto bg-primary text-on-primary font-label-caps text-[10px] px-1.5 py-0.5 rounded-full">3</span>
                </button>
                <button className="w-full flex items-center gap-xs px-xs py-2 rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-sm text-outline">tag</span>
                  <span>backend-api</span>
                </button>
                <button className="w-full flex items-center gap-xs px-xs py-2 rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-sm text-outline">tag</span>
                  <span>design-system</span>
                </button>
              </div>
            </div>
            {/* Direct Messages */}
            <div>
              <h3 className="font-label-caps text-label-caps text-outline mb-xs px-xs">Direct Messages</h3>
              <div className="space-y-1">
                {/* DM Item */}
                <button className="w-full flex items-center gap-sm px-xs py-2 rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors text-left">
                  <div className="relative">
                    <img alt="User Avatar" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChDFeoEcFHkEyD4J_c4BIqfYc4f8XTKRLNdKeBrlkbDYQrHA8NayEXxP1Yl04br9vd6lLIl9FFzWW2R9zz7bjIreUlCwSuam-dgPS0nQnySv3eJgd3nVhJ0a80MXtOYRV1Ja4X6UAC0k9dCGvTVF56Hz7xy1NnFqZEGRA673flQIRqH6lGblccjUVk7TcmJ7_oOPym_HF70LllY3oAcnDwxHB90A1UZmidDnGgM85mmrzhx_dnJhnclsnsa9Vk3jMxluNou6kx4Bw"/>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-surface-container-high"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-body-sm text-body-sm font-medium text-on-surface truncate">Alex Chen</p>
                      <span className="text-[10px] text-outline">2m</span>
                    </div>
                    <p className="font-body-sm text-[12px] text-outline truncate">LGTM. Go ahead and merge.</p>
                  </div>
                </button>
                {/* DM Item */}
                <button className="w-full flex items-center gap-sm px-xs py-2 rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-on-surface transition-colors text-left">
                  <div className="relative">
                    <img alt="User Avatar" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBINcRQWiVZO7WgHZdJaQXzkOn9iWCiqqnleHDVm9vzzxqTk--Zw7ZeXc5eeYL8uefo1ocsnWvNDJhqhbPNcLMe_N1WunEXynW6uto9EsUL0nRw-OU_K2UPvL16IXOMCQB_uBXaz3IV-iSfvPQZKUrpIs2tPSoCp6tKOyhWp3WBM77yRKf7_gIygDRH5_1PQW9hnenQFCl29CkyfwOfhlz9cyj1NycJGraYWBqExYK_GVxF6_qv6eX3mvYbadQpuImVM_jch7OobJM"/>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-outline rounded-full border-2 border-surface-container-high"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-body-sm text-body-sm font-medium text-on-surface truncate">Sarah Jenkins</p>
                      <span className="text-[10px] text-outline">1h</span>
                    </div>
                    <p className="font-body-sm text-[12px] text-outline truncate">Can we review the Figma file?</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col m-sm ml-0 md:ml-sm rounded-xl glass-panel relative overflow-hidden">
          {/* Chat Header */}
          <div className="px-md py-sm border-b border-outline-variant/10 flex justify-between items-center bg-surface/40 backdrop-blur-md z-10">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-outline text-xl hidden md:block">tag</span>
              {/* Mobile back button (visible only on small screens) */}
              <button className="md:hidden text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <div>
                <h2 className="font-body-lg text-body-lg font-semibold text-on-surface flex items-center gap-2">
                  frontend-core
                  <span className="bg-surface-bright text-outline text-[10px] px-2 py-0.5 rounded-full font-label-caps">Public</span>
                </h2>
                <p className="font-body-sm text-[12px] text-outline">Discussion for primary UI components</p>
              </div>
            </div>
            <div className="flex items-center gap-xs text-outline">
              <div className="flex -space-x-2 mr-sm">
                <img className="w-6 h-6 rounded-full border border-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfKJlNRAHabypai-J5xoXmSOV7MyUtYB9faUP0XKQhGEgbw5eq-TPRkehsa3UH9xm52fsmFe-WDcYvwqEHvd2Y34aSX14pJNcRUIerpHGXGh3IzhLjDTA4yvaSIBXseTovJmCuZvjFsMSHlfSw8CDwC9n2S8pXE99wFox36xZcvb4l1M56JHqHwDZuXyiPsijuo6SaKmq9jWESfSHZZuH1YQB7X254m0egzBHtDoHIDuaWQAvUl4amUhNhHZRh1JLU-vRVGl81o5w"/>
                <img className="w-6 h-6 rounded-full border border-surface-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPsEps33KBj_guSKfieiBc9VKoYQdZY2yefri8Loo7TF8Z3mPduote7hnUwjX7JbTAEca3gJ3_GzUB8DUJ7J5eA3sfuQrHsXAW-CpY0Ucy_H17CsINaeZLoee9AuWgOpYR0p3pg1f4Xpch61ikekSPXfMSZt0sIIBemwb7H-YRMctLxFjglT5OTUwTg_LiNm4KKnDotAfPImcU_sy5Ka4zskiq9zhbEHOGD9kR0BwOopl4dfSDkhM_QISy3qn6wlUJlyNNQQh79ps"/>
                <div className="w-6 h-6 rounded-full border border-surface-container bg-surface-bright flex items-center justify-center text-[10px] text-on-surface font-label-caps">+4</div>
              </div>
              <button className="p-1 hover:bg-white/10 rounded-md transition-colors hover:text-primary"><span className="material-symbols-outlined text-[20px]">person_add</span></button>
              <button className="p-1 hover:bg-white/10 rounded-md transition-colors hover:text-primary"><span className="material-symbols-outlined text-[20px]">push_pin</span></button>
            </div>
          </div>
          
          {/* Chat Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-md space-y-lg flex flex-col justify-end pb-24 custom-scrollbar">
            {/* Date Divider */}
            <div className="flex items-center gap-sm my-md">
              <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
              <span className="font-label-caps text-[10px] text-outline px-2">Today</span>
              <div className="flex-1 h-[1px] bg-outline-variant/20"></div>
            </div>
            
            {/* Other User Message (with file) */}
            <div className="flex gap-sm group">
              <img alt="User Avatar" className="w-10 h-10 rounded-full object-cover shrink-0 mt-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtgolrWGJ-NWDWw0Y1vmVsymzRkiZVBcSA2K0Cnxls0eNbL9yvSg6Fx64nnSvZpOtoPUsG_0SwwYNrUzcQ_afB9EdfZhak_Q0MuTGDWgs-3CkAN91UqP9M1zX5ErGZJBmwbamHJaxSv7WOJa8IjHsYsY4MG89yqa9KT57ueL-6NnT695pYBzVBXCFua-0J265oYNNaAU5tJn-S9XHTHOW5owm8J3uXO0eKuM7ngbUJ2yaX3uEl5Kiw3Q129U4MfHmJJL-OvvjFXAU"/>
              <div className="flex flex-col gap-1 w-full max-w-2xl">
                <div className="flex items-baseline gap-2">
                  <span className="font-body-md text-body-md font-semibold text-primary-container">Sarah Jenkins</span>
                  <span className="text-[11px] text-outline">10:42 AM</span>
                </div>
                <div className="font-body-md text-body-md text-on-surface bg-surface-container-high/40 p-sm rounded-r-xl rounded-bl-xl border border-white/5 inline-block w-fit">
                  <p>I've updated the component library based on yesterday's sync. Take a look at the new Glassmorphic card variations.</p>
                  {/* File Attachment */}
                  <div className="mt-sm p-2 bg-surface/50 rounded-lg border border-outline-variant/20 flex items-center gap-3 w-fit cursor-pointer hover:border-primary/50 transition-colors">
                    <div className="bg-secondary-container/50 p-2 rounded-md">
                      <span className="material-symbols-outlined text-secondary text-xl">flutter</span>
                    </div>
                    <div>
                      <p className="font-body-sm text-[13px] font-medium text-on-surface">Core_UI_Kit_v2.fig</p>
                      <p className="text-[11px] text-outline">2.4 MB • Figma Design</p>
                    </div>
                    <span className="material-symbols-outlined text-outline ml-4 hover:text-primary transition-colors">download</span>
                  </div>
                </div>
                {/* Inline Actions (Visible on group hover) */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 mt-1">
                  <button className="bg-surface border border-outline-variant/20 rounded-full px-2 py-0.5 flex items-center gap-1 hover:border-primary/50 transition-colors">
                    <span className="text-[12px]">👍</span>
                    <span className="text-[10px] text-outline">2</span>
                  </button>
                  <button className="bg-surface border border-outline-variant/20 rounded-full w-6 h-6 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-[14px]">add_reaction</span>
                  </button>
                  <button className="bg-surface border border-outline-variant/20 rounded-full w-6 h-6 flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors">
                    <span className="material-symbols-outlined text-[14px]">reply</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Current User Message */}
            <div className="flex gap-sm flex-row-reverse group">
              <img alt="User Avatar" className="w-10 h-10 rounded-full object-cover shrink-0 mt-1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFP4sSeYWzovglRw4O_Jaz767eVosFtk5bt80WNZSVF8GrXNlaDS_lnp3TFZBAyXU9AZjIhpFTuIcle-GBqFeipwelvubI_47sPwcggri-mHWNVtwk5Rv6S29WWbN1cBsoxTu4D6TXDrTwSZhx5fQxSUBLBJYj3jGn6PDZQswZVSK6l4ZIn8U0cQcvtu9YaRvZtizMBm6us00gHCN4YvUSHiM7d2CnjWeeFd-bWHP-Gsf9G0B6NKkO6s0gneCqzoW0ae-hPO-htfQ"/>
              <div className="flex flex-col gap-1 items-end w-full max-w-2xl">
                <div className="flex items-baseline gap-2 flex-row-reverse">
                  <span className="font-body-md text-body-md font-semibold text-on-surface">You</span>
                  <span className="text-[11px] text-outline">10:45 AM</span>
                </div>
                <div className="font-body-md text-body-md text-on-primary-container bg-primary-container p-sm rounded-l-xl rounded-br-xl shadow-[0_0_15px_rgba(160,120,255,0.15)] inline-block w-fit text-right">
                  Looks super clean! The deeper backdrop blur really sells the premium feel. I'll start implementing the CSS variables for the ambient glows today.
                </div>
                {/* Read Receipt */}
                <div className="text-[10px] text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
                  Read by 3
                </div>
              </div>
            </div>
            
            {/* Typing Indicator */}
            <div className="flex gap-sm items-center mt-2">
              <img alt="User Avatar" className="w-6 h-6 rounded-full object-cover shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeqLfD_h0thitfBSatRLJuQmZkqL_9yi-eu-dkYU8PNJAv8zDrFpR8Dd84EovAmKM5Hob3QwMacNp4QBxNWjzUacrcW9l_tdcq7eHmj7_2Q1rAtSzOecmyoEhddgINT9qOo6PhKnWCGifmJP0nbaUFx3hoD3Xbzqs547-ttfU2uati95U-pm4Ysmd6t0UZ2WiOrbfZ7YbmriMzhupfraXmaBswCdZi5BTFJNCc_zyosUJc3pCRqWJSSAUhusvRyChI9MTP0DZ8zR4"/>
              <div className="bg-surface-container-high/40 px-3 py-2 rounded-full border border-white/5 flex gap-1">
                <div className="w-1.5 h-1.5 bg-outline rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-outline rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 bg-outline rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="text-[11px] text-outline font-body-sm">Alex is typing...</span>
            </div>
          </div>
          
          {/* Input Area (Fixed at bottom of chat panel) */}
          <div className="absolute bottom-0 w-full p-md bg-gradient-to-t from-surface via-surface/90 to-transparent">
            <div className="bg-surface-container-high rounded-xl border border-outline-variant/30 flex flex-col focus-within:border-primary/50 focus-within:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all">
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface resize-none p-sm max-h-32 placeholder-outline/50 outline-none" 
                placeholder="Message #frontend-core..." 
                rows={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="flex justify-between items-center px-2 pb-2">
                <div className="flex gap-1 text-outline">
                  <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors hover:text-primary"><span className="material-symbols-outlined text-[20px]">add_circle</span></button>
                  <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors hover:text-primary"><span className="material-symbols-outlined text-[20px]">format_bold</span></button>
                  <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors hover:text-primary"><span className="material-symbols-outlined text-[20px]">code</span></button>
                  <button className="p-1.5 hover:bg-white/10 rounded-md transition-colors hover:text-primary"><span className="material-symbols-outlined text-[20px]">sentiment_satisfied</span></button>
                </div>
                <button className="bg-primary/20 text-primary hover:bg-primary hover:text-on-primary p-1.5 rounded-lg transition-all duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
