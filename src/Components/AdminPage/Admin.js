import React, { useEffect, useState } from 'react';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import {
  AudioOutlined,
  EditOutlined,
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MobileOutlined,
  ShoppingCartOutlined,
  SkinOutlined,
} from '@ant-design/icons';
import './fontawesome-free-6.4.0-web/css/all.min.css';
import { Layout, Menu, Button, theme, Avatar } from 'antd';
import './Admin.css';
import Homepage1 from '../pages/Homepage/Homepage1';
import AllProducts from '../pages/AllProducts/AllProducts';
import Mice from '../pages/Mice/Mice';
import Chair from '../pages/Chair/Chair';
import Keyboard from '../pages/Keyboard/Keyboard';
import Audio from '../pages/Audio/Audio';
import Console from '../pages/Console/Console';
import Mobile from '../pages/Mobile/Mobile';
import Apparel from '../pages/Apparel/Apparel';
import ContentCreation from '../pages/contentCreation/ContentCreation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { Header, Sider, Content } = Layout;
const Admin = (props) => {
  const listMenu = [
    {
      key: 'home',
      icon: <i class="fa-solid fa-house"></i>,
      label: 'Home',
    },
    {
      type: 'divider',
    },
    {
      key: 'allproduct',
      icon: <ShoppingCartOutlined />,
      label: 'All Products',
    },
    {
      key: 'laptop',
      icon: <LaptopOutlined />,
      label: 'Laptop',
    },
    {
      key: 'mice',
      icon: <FontAwesomeIcon icon="fa-sharp fa-solid fa-computer-mouse" />,
      label: 'Mice',
    },
    {
      key: 'chair',
      icon: <FontAwesomeIcon icon="fa-sharp fa-solid fa-chair" />,
      label: 'Chair',
    },
    {
      key: 'keyboard',
      icon: <FontAwesomeIcon icon="fa-regular fa-keyboard" />,
      label: 'Keyboard',
    },
    {
      key: 'audio',
      icon: <AudioOutlined />,
      label: 'Audio',
    },
    {
      key: 'console',
      icon: <FontAwesomeIcon icon="fa-sharp fa-solid fa-game-console-handheld" />,
      label: 'Console',
    },
    {
      key: 'mobile',
      icon: <MobileOutlined />,
      label: 'Mobile',
    },
    {
      key: 'apparel',
      icon: <SkinOutlined />,
      label: 'Apparel',
    },
    {
      key: 'content',
      icon: <EditOutlined />,
      label: 'Content Creation',
    },
  ];

  const navigate = useNavigate();
  const handleRedirectPage = ({ key }) => {
    if (key === 'home') {
      navigate('/');
    } else {
      navigate(`/adminpage/${key}`);
    }
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['home']}
            onSelect={handleRedirectPage}
            items={listMenu}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              <div>
                <Avatar shape="square" size={50} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              minHeight: 280,
            }}
          >
            {props.children}
            {/* <Routes>
              <Route path="/admin" element={<Homepage1 />} />
              <Route path="/laptop" element={<AllProducts />} />
              <Route path="/category/mice" element={<Mice />} />
              <Route path="/category/chair" element={<Chair />} />
              <Route path="/category/keyboard" element={<Keyboard />} />
              <Route path="/category/audio" element={<Audio />} />
              <Route path="/category/console" element={<Console />} />
              <Route path="/category/mobile" element={<Mobile />} />
              <Route path="/category/apparel" element={<Apparel />} />
              <Route path="/category/content" element={<ContentCreation />} />
            </Routes> */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Admin;
