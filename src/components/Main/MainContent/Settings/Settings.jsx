import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from 'avataaars';
import {randomAvatar}  from '../../../../avatars';


const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  justify-content: space-between;
  margin: 15px 45px;
  height: 100%;
  font-size: 17px;

	@media (max-width: 768px) {
		margin: 0;
		justify-content: flex-start;
	}
`;

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50%;
  padding: 0 15px;
  margin-bottom: 10px;
  background-color: #edf0f7;
`;

const SecurityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 50%;
  padding: 0 15px;
  background-color: #edf0f7;
  border-radius: 0 0 15px 15px;
`;

const Input = styled.input`
  background: transparent;
  color: #000;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1.25px solid #6d6d6d;
  font-size: 20px;
  height: 30px;
  padding: 0;
`;

const Button = styled.button`
  border: none;
  background-color: ${(props) => (props.outlined ? '#fff' : '#8541f6')};
  border: ${(props) => (props.outlined ? '1.25px solid #8541f6' : 'none')};
  color: ${(props) => (props.outlined ? '#8541f6' : '#fff')};
  border-radius: 10px;
  font-size: 20px;
  font-size: 16px;
  width: 300px;
  height: 30px;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.outlined ? '#8541f6' : '#fff')};
    color: ${(props) => (props.outlined ? '#fff' : '#8541f6')};
  }
`;

const Label = styled.label`
  font-size: 16px;
  opacity: 0.7;
  ::after {
    content: ':';
  }
`;

export default function Settings() {
  const [clickChangePassword, setClickChangePassword] = useState(false);

  return (
    <SettingsContainer>
      <PersonalInfoContainer>
        <h4 style={{ alignSelf: 'flex-start' }}>Personal Info</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ width: '300px' }}>
            <Label>Name</Label>
            <Input placeholder="Name" type="text" />
          </div>
          <div
            style={{
              width: '300px',
              display: 'flex',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              style={{ width: '150px', height: '150px', marginBottom: '10px' }}
              avatarStyle="Circle"
              topType={randomAvatar().topType}
              accessoriesType={randomAvatar().accessoriesType}
              hairColor={randomAvatar().hairColor}
              facialHairType={randomAvatar().facialHairType}
              clotheType={randomAvatar().clotheType}

              clotheColor={randomAvatar().clotheColor}
              eyeType={randomAvatar().eyeType}
              eyebrowType={randomAvatar().eyebrowType}
              mouthType={randomAvatar().mouthType}
              skinColor={randomAvatar().skinColor}
            />
            <Button outlined>Change Avatar</Button>
          </div>
        </div>
        <Button type="submit" style={{ marginBottom: '20px' }}>
          Save
        </Button>
      </PersonalInfoContainer>
      <SecurityContainer>
        <h4 style={{ alignSelf: 'flex-start' }}>Security</h4>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ width: '300px' }}>
            <Label>Sign-in email adress</Label>
            <Input style={{ height: '30px' }} placeholder="Email" type="email" />
          </div>
          <div style={{ width: '300px' }}>
            <Label>Password</Label>
            {!clickChangePassword ? (
              <Button type="submit" onClick={() => setClickChangePassword(!clickChangePassword)}>
                Change Password
              </Button>
            ) : (
              <>
                <Input placeholder="Old Password" type="password" />
                <Input placeholder="New Password" type="password" />
                <Input placeholder="Confirm Password" type="password" />
              </>
            )}
          </div>
        </div>
        <Button type="submit" style={{ marginBottom: '20px' }}>
          Save
        </Button>
      </SecurityContainer>
    </SettingsContainer>
  );
}
