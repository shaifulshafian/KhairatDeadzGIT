import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

import {AuthContext} from '../components/context';

export function DrawerContent(props) {
  const paperTheme = useTheme();

  const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Bakal Jenazah</Title>
                <Caption style={styles.caption}>@bakal_jenazah</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  8000
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  10000
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('Profile');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate('BookmarkScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate('SettingsScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => {
                props.navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
