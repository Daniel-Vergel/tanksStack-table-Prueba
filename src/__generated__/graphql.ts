/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** Description */
  ValidatePassword: { input: any; output: any; }
};

export type ActivityView = {
  __typename?: 'ActivityView';
  activityCode: Scalars['Float']['output'];
  answerStartDate: Scalars['DateTime']['output'];
  assignedDate: Scalars['DateTime']['output'];
  assignedDateHour: Scalars['DateTime']['output'];
  assignedDateTime: Scalars['DateTime']['output'];
  assignedHour: Scalars['String']['output'];
  bitCode: Scalars['Float']['output'];
  bitRadChannel: Scalars['String']['output'];
  bitStatus: Scalars['Boolean']['output'];
  bitTicket: Scalars['String']['output'];
  caseCode: Scalars['String']['output'];
  caseDescription: Scalars['String']['output'];
  clientCode: Scalars['Float']['output'];
  clientName: Scalars['String']['output'];
  createdDate: Scalars['DateTime']['output'];
  createdIp: Scalars['String']['output'];
  createdUserId: Scalars['Float']['output'];
  createdUserNickname: Scalars['String']['output'];
  description: Scalars['String']['output'];
  executorCode: Scalars['Float']['output'];
  executorFullName: Scalars['String']['output'];
  executorName: Scalars['String']['output'];
  executorSurname: Scalars['String']['output'];
  historyCreatedDate: Scalars['DateTime']['output'];
  hoursRemaining: Scalars['Float']['output'];
  isAssembly: Scalars['Boolean']['output'];
  isDaily: Scalars['Boolean']['output'];
  isEditable: Scalars['Boolean']['output'];
  isPartial: Scalars['Boolean']['output'];
  isReassigned: Scalars['Boolean']['output'];
  isRedmine: Scalars['Boolean']['output'];
  isSecure: Scalars['Boolean']['output'];
  isState: Scalars['Boolean']['output'];
  itemCode: Scalars['String']['output'];
  itemDescription: Scalars['String']['output'];
  itemParentCode: Scalars['Float']['output'];
  itemParentDescription: Scalars['Float']['output'];
  lastExecutorDate: Scalars['DateTime']['output'];
  maxAccumulatedHours: Scalars['Float']['output'];
  personEmail: Scalars['String']['output'];
  personUsername: Scalars['String']['output'];
  productCode: Scalars['Float']['output'];
  productName: Scalars['String']['output'];
  publicDescription: Scalars['String']['output'];
  receivedDate: Scalars['DateTime']['output'];
  remainingPercentage: Scalars['Float']['output'];
  remainingTime: Scalars['String']['output'];
  secureOrder: Scalars['Float']['output'];
  serialAnnex: Scalars['Float']['output'];
  solutionType: Scalars['String']['output'];
  state: Scalars['String']['output'];
  statusDate: Scalars['DateTime']['output'];
};

export type AddAndRemoveRoleInput = {
  roleId: Scalars['String']['input'];
  userId: UserIdInput;
};

export type ApprovalTokenInput = {
  code: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type City = {
  __typename?: 'City';
  code: Scalars['Int']['output'];
  department?: Maybe<Department>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CodeRecoverPasswordInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type CreateAndRemoveRoleFxInput = {
  permissions: Array<Scalars['String']['input']>;
  role: Scalars['ID']['input'];
};

export type CreateDocumentTypeInput = {
  document: Scalars['String']['input'];
};

export type CreateDummyInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstField: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  secondField: Scalars['DateTime']['input'];
  thirdField: Scalars['Float']['input'];
};

export type CreateGroupInput = {
  name: Scalars['String']['input'];
  notificationConfigId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateMultikeyRegisterInput = {
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  id: MultikeyRegisterIdInput;
};

export type CreateNotificationConfigInput = {
  emailDuplicateCode?: InputMaybe<Scalars['String']['input']>;
  emailPrincipalCode?: InputMaybe<Scalars['String']['input']>;
  hasEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasPush?: InputMaybe<Scalars['Boolean']['input']>;
  hasSms?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsPush?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsSms?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsWss?: InputMaybe<Scalars['Boolean']['input']>;
  hasWss?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  profileId: Scalars['Int']['input'];
  smsBody?: InputMaybe<Scalars['String']['input']>;
  subtype: Scalars['String']['input'];
  type: NotificationType;
  wssCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateNotificationGroupInput = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  metadata: Scalars['String']['input'];
  name: Scalars['String']['input'];
  notificationConfigId: Scalars['Int']['input'];
};

export type CreateNotificationInput = {
  emailRecipients?: InputMaybe<Array<EmailRecipient>>;
  metadata: Scalars['String']['input'];
  notificationGroupId?: InputMaybe<Scalars['ID']['input']>;
  notificationGroupName?: InputMaybe<Scalars['ID']['input']>;
  smsRecipient?: InputMaybe<SmsRecipient>;
  subtypeConfig: Scalars['String']['input'];
  type: TypeNotification;
  typeConfig: NotificationType;
  userId?: InputMaybe<Scalars['Int']['input']>;
  wssRecipient?: InputMaybe<WssRecipient>;
};

export type CreatePageLinkInput = {
  arguments?: InputMaybe<Array<Scalars['String']['input']>>;
  routeType?: InputMaybe<RouterType>;
  target?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePositionInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProfileInput = {
  city: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  document: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  region: Scalars['Int']['input'];
};

export type CreateRoleInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailAuth?: InputMaybe<Scalars['Int']['input']>;
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  lastName2?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['ValidatePassword']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  pid: Scalars['Int']['input'];
  pwdTemp?: InputMaybe<Scalars['Int']['input']>;
  type: UserTypes;
  userName: Scalars['String']['input'];
};

export type DateFilter = {
  _between?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  _eq?: InputMaybe<Scalars['DateTime']['input']>;
  _gt?: InputMaybe<Scalars['DateTime']['input']>;
  _gte?: InputMaybe<Scalars['DateTime']['input']>;
  _in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  _lt?: InputMaybe<Scalars['DateTime']['input']>;
  _lte?: InputMaybe<Scalars['DateTime']['input']>;
  _neq?: InputMaybe<Scalars['DateTime']['input']>;
  _notbetween?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Department = {
  __typename?: 'Department';
  code: Scalars['Int']['output'];
  country?: Maybe<Country>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type DocumentType = {
  __typename?: 'DocumentType';
  document: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type DoubleVerificationInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  emailVerification?: InputMaybe<Scalars['Boolean']['input']>;
  phoneVerification?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Dummy = {
  __typename?: 'Dummy';
  email: Scalars['String']['output'];
  firstField: Scalars['String']['output'];
  group?: Maybe<DummyGroup>;
  id: Scalars['Int']['output'];
  items: Array<DummyItem>;
  notification?: Maybe<Notification>;
  phone: Scalars['String']['output'];
  secondField: Scalars['DateTime']['output'];
  thirdField: Scalars['Float']['output'];
  type?: Maybe<DummyType>;
};

export type DummyFamily = {
  __typename?: 'DummyFamily';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type DummyGroup = {
  __typename?: 'DummyGroup';
  family?: Maybe<DummyFamily>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type DummyItem = {
  __typename?: 'DummyItem';
  dummy: Dummy;
  firstField: Scalars['String']['output'];
  fourthField: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  secondField: Scalars['DateTime']['output'];
  thirdField: Scalars['Float']['output'];
};

export type DummyType = {
  __typename?: 'DummyType';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type EmailRecipient = {
  email: Scalars['String']['input'];
  type: RecipientType;
};

export type Employee = {
  __typename?: 'Employee';
  IsDeveloper: Scalars['Boolean']['output'];
  IsDualWork: Scalars['Boolean']['output'];
  IsLateSkipped: Scalars['Boolean']['output'];
  IsPermissionSkipped: Scalars['Boolean']['output'];
  IsReporter: Scalars['Boolean']['output'];
  IsSuperUser: Scalars['Boolean']['output'];
  PerApe1: Scalars['String']['output'];
  PerApe2: Scalars['String']['output'];
  PerCarNom?: Maybe<Scalars['String']['output']>;
  PerCel: Scalars['String']['output'];
  PerCod: Scalars['Int']['output'];
  PerDireccion?: Maybe<Scalars['String']['output']>;
  PerEstado?: Maybe<Scalars['Boolean']['output']>;
  PerExtension?: Maybe<Scalars['String']['output']>;
  PerMail: Scalars['String']['output'];
  PerNom1: Scalars['String']['output'];
  PerNom2: Scalars['String']['output'];
  PerNumDoc?: Maybe<Scalars['String']['output']>;
  PerRecNot?: Maybe<Scalars['Boolean']['output']>;
  PerSigla?: Maybe<Scalars['String']['output']>;
  PerTel: Scalars['String']['output'];
  PerUserId?: Maybe<Scalars['Float']['output']>;
};

export type EmployeeInput = {
  PerCod: Scalars['Int']['input'];
};

export type FileInfo = {
  __typename?: 'FileInfo';
  fileExtension: Scalars['String']['output'];
  fileMode: FileModes;
  fileMongoId: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export enum FileModes {
  Buffer = 'buffer',
  Mongo = 'mongo',
  Url = 'url'
}

export type FindDummyFamilyWhere = {
  _and?: InputMaybe<Array<FindDummyFamilyWhere>>;
  _or?: InputMaybe<Array<FindDummyFamilyWhere>>;
  description?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindDummyGroupWhere = {
  _and?: InputMaybe<Array<FindDummyGroupWhere>>;
  _or?: InputMaybe<Array<FindDummyGroupWhere>>;
  family?: InputMaybe<FindDummyFamilyWhere>;
  name?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type FindDummyOrderBy = {
  firstField?: InputMaybe<OrderTypes>;
  secondField?: InputMaybe<OrderTypes>;
  thirdField?: InputMaybe<OrderTypes>;
};

export type FindDummyTypeWhere = {
  _and?: InputMaybe<Array<FindDummyTypeWhere>>;
  _or?: InputMaybe<Array<FindDummyTypeWhere>>;
  name?: InputMaybe<StringFilter>;
};

export type FindDummyWhere = {
  _and?: InputMaybe<Array<FindDummyWhere>>;
  _or?: InputMaybe<Array<FindDummyWhere>>;
  firstField?: InputMaybe<StringFilter>;
  group?: InputMaybe<FindDummyGroupWhere>;
  secondField?: InputMaybe<DateFilter>;
  thirdField?: InputMaybe<NumberFilter>;
  type?: InputMaybe<FindDummyTypeWhere>;
};

export type FindUsersOrderBy = {
  email?: InputMaybe<OrderTypes>;
  name?: InputMaybe<OrderTypes>;
};

export type FindUsersWhere = {
  _and?: InputMaybe<Array<FindUsersWhere>>;
  _or?: InputMaybe<Array<FindUsersWhere>>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<Array<UserTypes>>;
};

export type FunctionalityModel = {
  __typename?: 'FunctionalityModel';
  children?: Maybe<Array<FunctionalityModel>>;
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tags?: Maybe<Array<FunctionalityTag>>;
};

export enum FunctionalityTag {
  Controller = 'CONTROLLER',
  Custom = 'CUSTOM',
  Method = 'METHOD',
  Module = 'MODULE',
  Parent = 'PARENT',
  Resolver = 'RESOLVER',
  Standard = 'STANDARD'
}

export type Group = {
  __typename?: 'Group';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notificationConfig?: Maybe<NotificationConfig>;
  users?: Maybe<Array<User>>;
};

export type MetadataPagination = {
  __typename?: 'MetadataPagination';
  currentPage?: Maybe<Scalars['Int']['output']>;
  itemsPerPage?: Maybe<Scalars['Int']['output']>;
  totalItems?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type MultikeyRegister = {
  __typename?: 'MultikeyRegister';
  date: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: MultikeyRegisterId;
};

export type MultikeyRegisterId = {
  __typename?: 'MultikeyRegisterId';
  id: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type MultikeyRegisterIdInput = {
  id: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserRole: User;
  create: RoleFx;
  createDefaultRoles: Array<Role>;
  createDocumentType: DocumentType;
  createDummiesX: Array<Dummy>;
  createDummy: Dummy;
  createGroup: Group;
  createMultiKeyRegister: MultikeyRegister;
  createNotification: Notification;
  createNotificationConfig: NotificationConfig;
  createNotificationGroup: NotificationGroup;
  createPageLinkInput: PageLink;
  createPositionInput: Position;
  createProfile: Profile;
  createRole: Role;
  createRoleFx: Array<RoleFx>;
  createUser: User;
  enableAndDisableDoubleVerification: Scalars['String']['output'];
  i18nTest: Scalars['String']['output'];
  recoverPassword: Scalars['String']['output'];
  remove: NotificationGroup;
  removeDocumentType: DocumentType;
  removeDummy: Dummy;
  removeGroup: Group;
  removeMultiKeyRegister: MultikeyRegister;
  removeNotification: Notification;
  removeNotificationConfig: NotificationConfig;
  removePageLink: PageLink;
  removePosition: Position;
  removeProfile: Profile;
  removeRole: Role;
  removeRoleFx: Array<Scalars['String']['output']>;
  removeUser: User;
  removeUserRole: User;
  replaceAllRolesFx: Array<RoleFx>;
  resetSuperAdmin: User;
  sendCodeDoubleVerification: Scalars['String']['output'];
  signUpWithDocument: AuthResponse;
  signUpWithEmail: AuthResponse;
  signin: AuthResponse;
  update: NotificationGroup;
  updateDocumentType: DocumentType;
  updateDummy: Dummy;
  updateGroup: Group;
  updateMultiKeyRegister: MultikeyRegister;
  updateNotification: Notification;
  updateNotificationConfig: NotificationConfig;
  updatePageLinkInput: PageLink;
  updatePassword: User;
  updatePositionInput: Position;
  updateProfile: Profile;
  updateRole: Role;
  updateUser: User;
  updateUserInformation: User;
  updateUserPassword: User;
};


export type MutationAddUserRoleArgs = {
  addAndRemoveRoleInput: AddAndRemoveRoleInput;
};


export type MutationCreateArgs = {
  createInput: CreateAndRemoveRoleFxInput;
};


export type MutationCreateDocumentTypeArgs = {
  createInput: CreateDocumentTypeInput;
};


export type MutationCreateDummyArgs = {
  createInput: CreateDummyInput;
};


export type MutationCreateGroupArgs = {
  createInput: CreateGroupInput;
};


export type MutationCreateMultiKeyRegisterArgs = {
  createInput: CreateMultikeyRegisterInput;
};


export type MutationCreateNotificationArgs = {
  createInput: CreateNotificationInput;
};


export type MutationCreateNotificationConfigArgs = {
  createInput: CreateNotificationConfigInput;
};


export type MutationCreateNotificationGroupArgs = {
  createInput: CreateNotificationGroupInput;
};


export type MutationCreatePageLinkInputArgs = {
  createInput: CreatePageLinkInput;
};


export type MutationCreatePositionInputArgs = {
  createInput: CreatePositionInput;
};


export type MutationCreateProfileArgs = {
  createInput: CreateProfileInput;
};


export type MutationCreateRoleArgs = {
  createInput: CreateRoleInput;
};


export type MutationCreateRoleFxArgs = {
  createRoleFxInput: CreateAndRemoveRoleFxInput;
};


export type MutationCreateUserArgs = {
  createInput: CreateUserInput;
};


export type MutationEnableAndDisableDoubleVerificationArgs = {
  doubleVerificationInput: DoubleVerificationInput;
};


export type MutationRecoverPasswordArgs = {
  recoverPasswordInput: RecoverPasswordInput;
};


export type MutationRemoveArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveDocumentTypeArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveDummyArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveGroupArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveMultiKeyRegisterArgs = {
  id: MultikeyRegisterIdInput;
};


export type MutationRemoveNotificationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveNotificationConfigArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePageLinkArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePositionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProfileArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRoleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRoleFxArgs = {
  removeRoleFxInput: CreateAndRemoveRoleFxInput;
};


export type MutationRemoveUserArgs = {
  id: UserIdInput;
};


export type MutationRemoveUserRoleArgs = {
  addAndRemoveRoleInput: AddAndRemoveRoleInput;
};


export type MutationReplaceAllRolesFxArgs = {
  replaceAllRoleFxInput: CreateAndRemoveRoleFxInput;
};


export type MutationSendCodeDoubleVerificationArgs = {
  sendDoubleVerificationInput: SendDoubleVerificationInput;
};


export type MutationSignUpWithDocumentArgs = {
  signupInput: SignupInput;
};


export type MutationSignUpWithEmailArgs = {
  signupInput: SignupEmailInput;
};


export type MutationSigninArgs = {
  signinInput: SigninInput;
};


export type MutationUpdateArgs = {
  updateInput: UpdateNotificationGroupInput;
};


export type MutationUpdateDocumentTypeArgs = {
  updateInput: UpdateDocumentTypeInput;
};


export type MutationUpdateDummyArgs = {
  updateInput: UpdateDummyInput;
};


export type MutationUpdateGroupArgs = {
  updateInput: UpdateGroupInput;
};


export type MutationUpdateMultiKeyRegisterArgs = {
  updateInput: UpdateMultikeyRegisterInput;
};


export type MutationUpdateNotificationArgs = {
  updateInput: UpdateNotificationInput;
};


export type MutationUpdateNotificationConfigArgs = {
  updateInput: UpdateNotificationConfigInput;
};


export type MutationUpdatePageLinkInputArgs = {
  updateInput: CreatePageLinkInput;
};


export type MutationUpdatePasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};


export type MutationUpdatePositionInputArgs = {
  updateInput: UpdatePositionInput;
};


export type MutationUpdateProfileArgs = {
  updateInput: UpdateProfileInput;
};


export type MutationUpdateRoleArgs = {
  updateInput: UpdateRoleInput;
};


export type MutationUpdateUserArgs = {
  updateInput: UpdateUserInput;
};


export type MutationUpdateUserInformationArgs = {
  updateUserInformationInput: UpdateUserInformationInput;
};


export type MutationUpdateUserPasswordArgs = {
  updateUserPasswordInput: UpdateUserPasswordInput;
};

export type Notification = {
  __typename?: 'Notification';
  externalId?: Maybe<Scalars['ID']['output']>;
  externalMessage?: Maybe<Scalars['String']['output']>;
  hasPersistent: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  notificationConfig: NotificationConfig;
  notificationGroup?: Maybe<NotificationGroup>;
  persistentExpiration?: Maybe<Scalars['DateTime']['output']>;
  stateNotification: StateNotification;
  statePersistent?: Maybe<StatePersistent>;
  type: TypeNotification;
  user?: Maybe<User>;
};

export type NotificationConfig = {
  __typename?: 'NotificationConfig';
  emailDuplicateCode?: Maybe<Scalars['ID']['output']>;
  emailPrincipalCode?: Maybe<Scalars['ID']['output']>;
  hasEmail: Scalars['Boolean']['output'];
  hasPersistent: Scalars['Boolean']['output'];
  hasPush: Scalars['Boolean']['output'];
  hasSms: Scalars['Boolean']['output'];
  hasTwoStepsEmail: Scalars['Boolean']['output'];
  hasTwoStepsPush: Scalars['Boolean']['output'];
  hasTwoStepsSms: Scalars['Boolean']['output'];
  hasTwoStepsWss: Scalars['Boolean']['output'];
  hasWss: Scalars['Boolean']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  persistentExpiration?: Maybe<Scalars['DateTime']['output']>;
  persistentHtml?: Maybe<Scalars['String']['output']>;
  profile: Profile;
  smsBody?: Maybe<Scalars['String']['output']>;
  subtype: Scalars['String']['output'];
  type: NotificationType;
  wssCode?: Maybe<Scalars['ID']['output']>;
};

export type NotificationGroup = {
  __typename?: 'NotificationGroup';
  group: Group;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notificationConfig: NotificationConfig;
  stateNotificationGroup: StateNotificationGroup;
  typeNotificationGroup: TypeNotificationGroup;
};

export enum NotificationType {
  Token = 'Token'
}

export type NumberFilter = {
  _between?: InputMaybe<Array<Scalars['Float']['input']>>;
  _eq?: InputMaybe<Scalars['Float']['input']>;
  _gt?: InputMaybe<Scalars['Float']['input']>;
  _gte?: InputMaybe<Scalars['Float']['input']>;
  _in?: InputMaybe<Array<Scalars['Float']['input']>>;
  _lt?: InputMaybe<Scalars['Float']['input']>;
  _lte?: InputMaybe<Scalars['Float']['input']>;
  _neq?: InputMaybe<Scalars['Float']['input']>;
  _notbetween?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export enum OrderTypes {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageLink = {
  __typename?: 'PageLink';
  arguments?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['Int']['output'];
  routeType?: Maybe<RouterType>;
  target?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Pagination = {
  skip: Scalars['Int']['input'];
  take: Scalars['Int']['input'];
};

export enum PersonTypes {
  Legal = 'Legal',
  Natural = 'Natural'
}

export type Position = {
  __typename?: 'Position';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Profile = {
  __typename?: 'Profile';
  city: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  document: Scalars['String']['output'];
  email: Scalars['String']['output'];
  externalId: Scalars['ID']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  region: Scalars['Int']['output'];
  stateAws?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  Count: MetadataPagination;
  NotificationGroup: NotificationGroup;
  NotificationGroups: Array<NotificationGroup>;
  NotificationGroupsCount: MetadataPagination;
  approvalJwt: AuthResponse;
  cities: Array<City>;
  city: City;
  codeRecoverPassword: Scalars['String']['output'];
  countries: Array<Country>;
  country: Country;
  currentEmployee: Employee;
  department: Department;
  departments: Array<Department>;
  documentType: DocumentType;
  documentTypes: Array<DocumentType>;
  documentTypesCount: MetadataPagination;
  dummies: Array<Dummy>;
  dummiesCount: MetadataPagination;
  dummy: Dummy;
  employee: Employee;
  employees: Array<Employee>;
  file: FileInfo;
  findAll: Array<UserKey>;
  findOne: UserKey;
  functionalities: FunctionalityModel;
  getCurrentActivities: Array<ActivityView>;
  group: Group;
  groups: Array<Group>;
  groupsCount: MetadataPagination;
  multiKeyRegister: MultikeyRegister;
  multiKeyRegisters: Array<MultikeyRegister>;
  multiKeyRegistersCount: MetadataPagination;
  notification: Notification;
  notificationConfig: NotificationConfig;
  notificationConfigs: Array<NotificationConfig>;
  notificationConfigsCount: MetadataPagination;
  notifications: Array<Notification>;
  notificationsCount: MetadataPagination;
  pageLink: PageLink;
  pageLinks: Array<PageLink>;
  pageLinksCount: MetadataPagination;
  position: Position;
  positions: Array<Position>;
  positionsCount: MetadataPagination;
  profile: Profile;
  profiles: Array<Profile>;
  profilesCount: MetadataPagination;
  revalidate: AuthResponse;
  role: Role;
  roleFx: RoleFx;
  roles: Array<Role>;
  rolesCount: MetadataPagination;
  rolesFx: Array<RoleFx>;
  rolesFxCount: MetadataPagination;
  user: User;
  users: Array<User>;
  usersCount: MetadataPagination;
  validateUserToken: User;
};


export type QueryCountArgs = {
  orderBy?: InputMaybe<Array<FindUsersOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindUsersWhere>;
};


export type QueryNotificationGroupArgs = {
  id: Scalars['Int']['input'];
};


export type QueryNotificationGroupsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationGroupsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryApprovalJwtArgs = {
  approvalTokenInput: ApprovalTokenInput;
};


export type QueryCitiesArgs = {
  departmentId?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderTypes>;
};


export type QueryCityArgs = {
  departmentId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type QueryCodeRecoverPasswordArgs = {
  codeRecoverPasswordInput: CodeRecoverPasswordInput;
};


export type QueryCountriesArgs = {
  orderBy?: InputMaybe<OrderTypes>;
};


export type QueryCountryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDepartmentArgs = {
  countryId: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
};


export type QueryDepartmentsArgs = {
  countryId?: InputMaybe<Scalars['ID']['input']>;
  orderBy?: InputMaybe<OrderTypes>;
};


export type QueryDocumentTypeArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocumentTypesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryDocumentTypesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryDummiesArgs = {
  orderBy?: InputMaybe<Array<FindDummyOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindDummyWhere>;
};


export type QueryDummiesCountArgs = {
  orderBy?: InputMaybe<Array<FindDummyOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindDummyWhere>;
};


export type QueryDummyArgs = {
  id: Scalars['Int']['input'];
};


export type QueryEmployeeArgs = {
  employeeInput: EmployeeInput;
};


export type QueryFileArgs = {
  id: Scalars['Int']['input'];
};


export type QueryFindAllArgs = {
  orderBy?: InputMaybe<Array<FindUsersOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindUsersWhere>;
};


export type QueryFindOneArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGroupArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGroupsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryGroupsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryMultiKeyRegisterArgs = {
  id: MultikeyRegisterIdInput;
};


export type QueryMultiKeyRegistersArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryMultiKeyRegistersCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryNotificationConfigArgs = {
  id: Scalars['Int']['input'];
};


export type QueryNotificationConfigsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationConfigsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryNotificationsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryPageLinkArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPageLinksArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryPageLinksCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryPositionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryPositionsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryPositionsCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryProfileArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProfilesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryProfilesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryRoleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRoleFxArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRolesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryRolesCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryRolesFxArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryRolesFxCountArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryUserArgs = {
  id: UserIdInput;
};


export type QueryUsersArgs = {
  orderBy?: InputMaybe<Array<FindUsersOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindUsersWhere>;
};


export type QueryUsersCountArgs = {
  orderBy?: InputMaybe<Array<FindUsersOrderBy>>;
  pagination?: InputMaybe<Pagination>;
  where?: InputMaybe<FindUsersWhere>;
};


export type QueryValidateUserTokenArgs = {
  validateTokenInput: ValidateTokenInput;
};

export enum RecipientType {
  Bcc = 'Bcc',
  Cc = 'Cc',
  Destinatary = 'Destinatary'
}

export type RecoverPasswordInput = {
  email: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  defaultForType?: Maybe<UserTypes>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  roleFx: Array<RoleFx>;
};

export type RoleFx = {
  __typename?: 'RoleFx';
  id: Scalars['Int']['output'];
  permission: Scalars['String']['output'];
  role?: Maybe<Role>;
};

export enum RouterType {
  ExternalRoute = 'ExternalRoute',
  InternalRouteWithArguments = 'InternalRouteWithArguments',
  InternaltRoute = 'InternaltRoute'
}

export type SendDoubleVerificationInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};

export type SigninInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  identificationNumber?: InputMaybe<Scalars['String']['input']>;
  identificationType?: InputMaybe<UserDocumentTypes>;
  legalRepresentativeIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  personType?: InputMaybe<PersonTypes>;
  userName: Scalars['String']['input'];
  verificationDigit?: InputMaybe<Scalars['String']['input']>;
};

export type SignupEmailInput = {
  confirmationPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['ValidatePassword']['input'];
};

export type SignupInput = {
  address: Scalars['String']['input'];
  cityId: Scalars['ID']['input'];
  clientId?: InputMaybe<Scalars['String']['input']>;
  confirmationEmail: Scalars['String']['input'];
  confirmationPassword: Scalars['String']['input'];
  countryId: Scalars['ID']['input'];
  dateIssue?: InputMaybe<Scalars['DateTime']['input']>;
  departmentId: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  emailAuth?: InputMaybe<Scalars['Int']['input']>;
  firsName: Scalars['String']['input'];
  hasRural: Scalars['Boolean']['input'];
  identificationNumber: Scalars['String']['input'];
  identificationType: UserDocumentTypes;
  lastName: Scalars['String']['input'];
  lastName2: Scalars['String']['input'];
  legalRepresentativeIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
  legalRepresentativeIdentificationType?: InputMaybe<UserDocumentTypes>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['ValidatePassword']['input'];
  phoneCountryCode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  pid: Scalars['Int']['input'];
  pwdTemp?: InputMaybe<Scalars['Int']['input']>;
  secondSurname?: InputMaybe<Scalars['String']['input']>;
};

export type SmsRecipient = {
  email?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export enum StateNotification {
  Complete = 'Complete',
  Draft = 'Draft',
  Error = 'Error'
}

export enum StateNotificationGroup {
  Complete = 'Complete',
  Draft = 'Draft',
  Error = 'Error',
  PartialComplete = 'PartialComplete',
  Process = 'Process'
}

export enum StatePersistent {
  NoPersistent = 'NoPersistent',
  Open = 'Open',
  Receive = 'Receive',
  Send = 'Send'
}

export type StringFilter = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _endswith?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _notcontains?: InputMaybe<Scalars['String']['input']>;
  _notendswith?: InputMaybe<Scalars['String']['input']>;
  _notlike?: InputMaybe<Scalars['String']['input']>;
  _notstartswith?: InputMaybe<Scalars['String']['input']>;
  _startswith?: InputMaybe<Scalars['String']['input']>;
};

export enum TypeNotification {
  Email = 'Email',
  Push = 'Push',
  Sms = 'Sms',
  Wss = 'Wss'
}

export enum TypeNotificationGroup {
  Automatic = 'Automatic',
  Manual = 'Manual'
}

export type UpdateDocumentTypeInput = {
  document?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateDummyInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstField?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  secondField?: InputMaybe<Scalars['DateTime']['input']>;
  thirdField?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateGroupInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  notificationConfigId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateMultikeyRegisterInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: MultikeyRegisterIdInput;
};

export type UpdateNotificationConfigInput = {
  emailDuplicateCode?: InputMaybe<Scalars['String']['input']>;
  emailPrincipalCode?: InputMaybe<Scalars['String']['input']>;
  hasEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasPush?: InputMaybe<Scalars['Boolean']['input']>;
  hasSms?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsEmail?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsPush?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsSms?: InputMaybe<Scalars['Boolean']['input']>;
  hasTwoStepsWss?: InputMaybe<Scalars['Boolean']['input']>;
  hasWss?: InputMaybe<Scalars['Boolean']['input']>;
  html?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  profileId?: InputMaybe<Scalars['Int']['input']>;
  smsBody?: InputMaybe<Scalars['String']['input']>;
  subtype?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<NotificationType>;
  wssCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotificationGroupInput = {
  groupId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['Int']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notificationConfigId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateNotificationInput = {
  emailRecipients?: InputMaybe<Array<EmailRecipient>>;
  id: Scalars['Int']['input'];
  metadata?: InputMaybe<Scalars['String']['input']>;
  notificationGroupId?: InputMaybe<Scalars['ID']['input']>;
  notificationGroupName?: InputMaybe<Scalars['ID']['input']>;
  smsRecipient?: InputMaybe<SmsRecipient>;
  subtypeConfig?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<TypeNotification>;
  typeConfig?: InputMaybe<NotificationType>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  wssRecipient?: InputMaybe<WssRecipient>;
};

export type UpdatePasswordInput = {
  password: Scalars['ValidatePassword']['input'];
  passwordConfirm: Scalars['ValidatePassword']['input'];
  token: Scalars['String']['input'];
};

export type UpdatePositionInput = {
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProfileInput = {
  city?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInformationInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  clientId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailAuth?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: UserIdInput;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName2?: InputMaybe<Scalars['String']['input']>;
  middleName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['ValidatePassword']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  pid?: InputMaybe<Scalars['Int']['input']>;
  pwdTemp?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<UserTypes>;
  userName?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserPasswordInput = {
  currentPassword: Scalars['ValidatePassword']['input'];
  newPassword: Scalars['ValidatePassword']['input'];
  newPasswordConfirm: Scalars['ValidatePassword']['input'];
};

export type User = {
  __typename?: 'User';
  clientId?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailAuth?: Maybe<Scalars['Int']['output']>;
  firstName: Scalars['String']['output'];
  firstTime?: Maybe<Scalars['Int']['output']>;
  fullName: Scalars['String']['output'];
  guid?: Maybe<Scalars['String']['output']>;
  id: UserId;
  lastName: Scalars['String']['output'];
  lastName2?: Maybe<Scalars['String']['output']>;
  logDateExp?: Maybe<Scalars['DateTime']['output']>;
  logEstado?: Maybe<Scalars['String']['output']>;
  logFecHor?: Maybe<Scalars['DateTime']['output']>;
  logFecSusp?: Maybe<Scalars['DateTime']['output']>;
  logInt?: Maybe<Scalars['Int']['output']>;
  logIntCicl?: Maybe<Scalars['Int']['output']>;
  middleName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  pid: Scalars['Int']['output'];
  pwdTemp?: Maybe<Scalars['Int']['output']>;
  pwdToken?: Maybe<Scalars['String']['output']>;
  pwrdCrypt?: Maybe<Scalars['String']['output']>;
  status: Scalars['Int']['output'];
  tokenNotification?: Maybe<Scalars['String']['output']>;
  type: UserTypes;
  userName: Scalars['String']['output'];
  userRoles: Array<Role>;
  userRolesFx: Array<RoleFx>;
};

export enum UserDocumentTypes {
  CitizenshipCard = 'CitizenshipCard',
  DiplomaticCard = 'DiplomaticCard',
  ForeignerIdentityCard = 'ForeignerIdentityCard',
  IdentityCard = 'IdentityCard',
  Nit = 'Nit',
  Passport = 'Passport',
  SafeConduct = 'SafeConduct',
  SpecialPermissionToStay = 'SpecialPermissionToStay',
  TemporaryProtectionPermit = 'TemporaryProtectionPermit'
}

export type UserId = {
  __typename?: 'UserId';
  id: Scalars['Int']['output'];
};

export type UserIdInput = {
  id: Scalars['Int']['input'];
};

export type UserKey = {
  __typename?: 'UserKey';
  id: Scalars['Int']['output'];
  userApiEstado: Scalars['Int']['output'];
  userApiFec: Scalars['DateTime']['output'];
  userApiFecExp: Scalars['DateTime']['output'];
  userApiKey: Scalars['String']['output'];
  userId: Scalars['Int']['output'];
};

export enum UserTypes {
  Administrador = 'Administrador',
  Funcionario = 'Funcionario',
  Personal = 'Personal'
}

export type ValidateTokenInput = {
  token: Scalars['String']['input'];
};

export type WssRecipient = {
  document?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  phonePrefix?: InputMaybe<Scalars['String']['input']>;
};
