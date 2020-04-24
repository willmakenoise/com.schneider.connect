# Schneider Connect - 2-Gang Wall Button - MTN50X2XX / WDE00X903

---

## Node info

- Manufacturer id: 122
- ProductType id: 1
- Product id: 4
- Firmware Version: 1.8
- Hardware Version:
- Firmware id: undefined
- Secure: ⨯
- Battery: true
- DeviceClassBasic: BASIC_TYPE_CONTROLLER
- DeviceClassGeneric: GENERIC_TYPE_SWITCH_REMOTE
- DeviceClassSpecific: SPECIFIC_TYPE_NOT_USED
- Token: 2f6d4363-19d2-462f-93cb-36e030ee99a8
- CommandClass: COMMAND_CLASS_MANUFACTURER_SPECIFIC
  - Version: 1
  - Commands:
    - MANUFACTURER_SPECIFIC_GET
    - MANUFACTURER_SPECIFIC_REPORT
- CommandClass: COMMAND_CLASS_VERSION
  - Version: 1
  - Commands:
    - VERSION_COMMAND_CLASS_GET
    - VERSION_COMMAND_CLASS_REPORT
    - VERSION_GET
    - VERSION_REPORT
- CommandClass: COMMAND_CLASS_CONFIGURATION
  - Version: 1
  - Commands:
    - CONFIGURATION_GET
    - CONFIGURATION_REPORT
    - CONFIGURATION_SET
- CommandClass: COMMAND_CLASS_ASSOCIATION
  - Version: 1
  - Commands:
    - ASSOCIATION_GET
    - ASSOCIATION_GROUPINGS_GET
    - ASSOCIATION_GROUPINGS_REPORT
    - ASSOCIATION_REMOVE
    - ASSOCIATION_REPORT
    - ASSOCIATION_SET
- CommandClass: COMMAND_CLASS_MULTI_INSTANCE_ASSOCIATION
  - Version: 1
  - Commands:
    - MULTI_INSTANCE_ASSOCIATION_GET
    - MULTI_INSTANCE_ASSOCIATION_GROUPINGS_GET
    - MULTI_INSTANCE_ASSOCIATION_GROUPINGS_REPORT
    - MULTI_INSTANCE_ASSOCIATION_REMOVE
    - MULTI_INSTANCE_ASSOCIATION_REPORT
    - MULTI_INSTANCE_ASSOCIATION_SET
- CommandClass: COMMAND_CLASS_BASIC
  - Version: 1
  - Commands:
    - BASIC_GET
    - BASIC_REPORT
    - BASIC_SET
- CommandClass: COMMAND_CLASS_SWITCH_MULTILEVEL
  - Version: 1
  - Commands:
    - SWITCH_MULTILEVEL_GET
    - SWITCH_MULTILEVEL_REPORT
    - SWITCH_MULTILEVEL_SET
    - SWITCH_MULTILEVEL_START_LEVEL_CHANGE
    - SWITCH_MULTILEVEL_STOP_LEVEL_CHANGE
- CommandClass: COMMAND_CLASS_BASIC_WINDOW_COVERING
  - Version: 2
  - Commands:
    - BASIC_WINDOW_COVERING_START_LEVEL_CHANGE
    - BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE

---

## Parameters

Param | Description
----- | -----------
0 | Mode Button 1
1 | Mode Button 2
2 | Mode Button 3
3 | Mode Button 4

### Parameter Values

#### 0 - Switching/dimming/roller shutter dual-surface

Both Up and Down button needs to have this parameter. Test otherwise.

Action | Command Sent | Value | Notes
------ | ------------ | ----- | -----
Push Btn Top | BASIC_SET | '1': { 'Value (Raw)': <Buffer ff>, Value: 255 },<br>'2': null
Push Btn Bottom | BASIC_SET | '1': { 'Value (Raw)': <Buffer 00>, Value: 0 },<br>'2': null

#### 4 - On/off, single surface

Action | Command Sent | Value | Notes
------ | ------------ | ----- | -----
Push | BASIC_GET | '1': {}, '2': null | Asks for state?
. | BASIC_SET | '1': { 'Value (Raw)': <Buffer ff>, Value: 255 },<br>'2': null | Always sends 255. Depending on BASIC_GET?

#### 44 - Doorbell Function

Action | Command Sent | Value | Notes
------ | ------------ | ----- | -----
Push | BASIC_SET | '1': { 'Value (Raw)': <Buffer ff>, Value: 255 },<br>'2': null
Release | BASIC_SET | '1': { 'Value (Raw)': <Buffer 00>, Value: 0 },<br>'2': null

#### 54 - Move Roller Shutter, single surface

Action | Command Sent | Value | Notes
------ | ------------ | ----- | -----
Push | BASIC_WINDOW_COVERING_START_LEVEL_CHANGE | '1': { 'Level (Raw)': <Buffer 40>,<br>Level: { 'Open/ Close': true, Reserved2: false } },<br>'2': null
Release | BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE | '1': {}, '2': null
Push<br> (2nd time) | BASIC_WINDOW_COVERING_START_LEVEL_CHANGE | '1': { 'Level (Raw)': <Buffer 00>,<br>Level: { 'Open/ Close': false, Reserved2: false } },<br>'2': null |

#### 52 - Lower Roller Shutter as long as button is pressed

Action | Command Sent | Value | Notes
------ | ------------ | ----- | -----
Push | BASIC_WINDOW_COVERING_START_LEVEL_CHANGE | '1': { 'Level (Raw)': <Buffer 40>,<br>Level: { 'Open/ Close': true, Reserved2: false } },<br>'2': null
Release | BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE | '1': {}, '2': null

#### 55 - Raise Roller Shutter as long as button is pressed

Action | Command Sent | Value | Notes
------ | ------------ | ----- | -----
Push | BASIC_WINDOW_COVERING_START_LEVEL_CHANGE | '1': { 'Level (Raw)': <Buffer 00>,<br>Level: { 'Open/ Close': false, Reserved2: false } },<br>'2': null
Release | BASIC_WINDOW_COVERING_STOP_LEVEL_CHANGE | '1': {}, '2': null

#### 60 - Retrieve/Save Scene

Action | Command Sent | Value | Notes
------ | ------------ | ----- | -----
Push | BASIC_SET | '1': { 'Value (Raw)': <Buffer 00>, Value: 0 },<br>'2': null
Hold (5 sec) | BASIC_GET | '1': {}, '2': null |
