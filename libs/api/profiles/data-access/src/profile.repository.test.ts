import { ProfilesRepository } from './profiles.repository';
import { Firestore } from '@google-cloud/firestore';

const profileData: { userId: string, accountDetails: any, posts: Array<{ postID: string; content: string; }> } = {
    userId: 'testUserId',
    accountDetails: {
      displayName: 'John Doe',
      email: 'john.doe@example.com',
      photoURL: 'http://example.com/photo.jpg',
    },
    posts: [],
  };


  jest.mock('firebase-admin', () => {
    const postDoc = {
      set: jest.fn().mockResolvedValue('post created'), // Mock the set method for post
    };

    const postsCollection = {
      doc: jest.fn().mockReturnValue(postDoc),
    };

    const doc = {
      get: jest.fn().mockResolvedValue({ data: () => profileData }),
      create: jest.fn().mockResolvedValue('created'), // Mock the create method
      set: jest.fn().mockResolvedValue('updated'), // Mock the set method
      collection: jest.fn().mockReturnValue(postsCollection), // Mock the collection method for doc
    };

    const collection = {
      doc: jest.fn().mockReturnValue(doc),
      withConverter: jest.fn().mockReturnThis(),
    };

    const firestore = {
      collection: jest.fn().mockReturnValue(collection),
    };

    return {
      firestore: jest.fn().mockReturnValue(firestore), // Return a function that returns the mock firestore object
    };
  });



describe('ProfilesRepository', () => {
  let profilesRepository: ProfilesRepository;

  beforeEach(() => {
    profilesRepository = new ProfilesRepository();
  });

  it('findOne should call the correct firestore methods', async () => {
    const result = await profilesRepository.findOne(profileData);
    expect(result.data()).toEqual(profileData);
  });

  it('createProfile should call the correct firestore methods', async () => {
    const result = await profilesRepository.createProfile(profileData);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const firestore = require('firebase-admin').firestore;

    expect(firestore().collection).toHaveBeenCalledWith('profiles');
    expect(firestore().collection().doc).toHaveBeenCalledWith(profileData.userId);
    expect(firestore().collection().doc().create).toHaveBeenCalledWith(profileData);
    expect(result).toEqual('created');
  });

  it('updateProfile should call the correct firestore methods', async () => {
    const result = await profilesRepository.updateProfile(profileData);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const firestore = require('firebase-admin').firestore;

    expect(firestore().collection).toHaveBeenCalledWith('profiles');
    expect(firestore().collection().doc).toHaveBeenCalledWith(profileData.userId);
    expect(firestore().collection().doc().set).toHaveBeenCalledWith(profileData, { merge: true });
    expect(result).toEqual('updated');
  });

  it('addPost should call the correct firestore methods', async () => {
    const post = { postID: 'testPostId', content: 'Test post' };
    profileData.posts.push(post);
    const result = await profilesRepository.addPost(profileData, post);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const firestore = require('firebase-admin').firestore;

    expect(firestore().collection).toHaveBeenCalledWith('profiles');
    expect(firestore().collection().doc).toHaveBeenCalledWith(profileData.userId);
    expect(firestore().collection().doc().get).toHaveBeenCalled();
    expect(firestore().collection().doc().collection).toHaveBeenCalledWith('posts');
    expect(firestore().collection().doc().collection().doc).toHaveBeenCalledWith(post.postID);
    expect(firestore().collection().doc().collection().doc().set).toHaveBeenCalledWith(post);
    expect(result?.posts?.[0]).toEqual(post);
  });

});
