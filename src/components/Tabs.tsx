'use client'
import React from 'react'
import { useState } from 'react'
import TabComponent from './TabComponent'
import TabContent from './TabContent'

function Tabs() {
    const [activeTab, setActiveTab] = useState('skills');

    const handleTabChange = (tab: string) => {
      setActiveTab(tab);
    };
  
  return (
    <>
        <TabComponent activeTab={activeTab} handleTabChange={handleTabChange} />
        <TabContent activeTab={activeTab} />

    </>
  )
}

export default Tabs